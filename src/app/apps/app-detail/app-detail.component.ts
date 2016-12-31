import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Application } from "../models/application";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { ApplicationService } from '../application.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-detail',
  templateUrl: 'app-detail.component.html'
})
export class AppDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private appIndex: number;
  selectedApplication: Application;


  constructor(private sls: ShoppingListService,
              private route: ActivatedRoute,
              private applicatonService: ApplicationService,
              private router: Router
            ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.appIndex = params['id'];
        this.selectedApplication = this.applicatonService.getApp(this.appIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/apps', this.appIndex, 'edit']);
  }

  onDelete() {
    this.applicatonService.deleteApp(this.selectedApplication);
    this.router.navigate(['/apps']);
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedApplication.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
