import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ApplicationCategory } from '../models/application-category';
import { ApplicationService } from '../services/application.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-category-detail',
  templateUrl: 'app-category-detail.component.html'
})
export class AppCategoryDetailComponent implements OnInit, OnDestroy, AfterViewInit {
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
    this.sls.addItems(this.selectedApplicationCategory.applications);
  }

  ngAfterViewInit(): void {
    $(document).ready(function(){
      $('.tooltipped').tooltip({delay: 50});
    });

    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
