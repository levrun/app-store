import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Application } from "../../shared/application";
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
        this.appIndex = params['app_id'];
        this.selectedApplication = new Application("MyApplication", 2);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
