import { Application } from '../../shared/application';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ApplicationService } from '../services/application.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-detail',
  templateUrl: 'app-detail.component.html'
})
export class AppDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscription: Subscription;
  private appIndex: number;
  private appCategoryIndex: number;
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
        this.appCategoryIndex = params['id'];
        this.selectedApplication = this.applicatonService.getAppByCategoryIdAndAppId(this.appCategoryIndex, this.appIndex);
      }
    );
  }

  ngAfterViewInit(): void {
    $(document).ready(function(){
      $('.tooltipped').tooltip({delay: 50});
    });
  }


  onEdit() {
    this.router.navigate(['/categories', this.appCategoryIndex, 'apps', this.appIndex, 'edit']);
  }

  onDelete() {
      this.applicatonService.deleteApp(this.appCategoryIndex, this.appIndex);
      this.router.navigate(['/categories', this.appCategoryIndex, 'apps']);
  }

  onDownload() {
    // TODO
    console.log('onDownload()');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
