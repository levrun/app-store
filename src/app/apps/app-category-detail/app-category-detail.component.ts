import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicationCategory } from "../models/application-category";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { ApplicationService } from '../application.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-category-detail',
  templateUrl: 'app-category-detail.component.html'
})
export class AppCategoryDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private appCategoryIndex: number;
  selectedApplicationCategory: ApplicationCategory;


  constructor(private sls: ShoppingListService,
              private route: ActivatedRoute,
              private applicatonService: ApplicationService,
              private router: Router
            ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.appCategoryIndex = params['id'];
        this.selectedApplicationCategory = this.applicatonService.getAppCategory(this.appCategoryIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/categories', this.appCategoryIndex, 'edit']);
  }

  onDelete() {
    this.applicatonService.deleteAppCategory(this.selectedApplicationCategory);
    this.router.navigate(['/categories']);
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedApplicationCategory.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
