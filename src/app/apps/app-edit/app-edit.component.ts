import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Application } from "../../shared/application";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { ApplicationService } from '../application.service';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-edit',
  templateUrl: 'app-edit.component.html'
})
export class AppEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private appIndex: number;
  private appCategoryIndex: number;
  selectedApplication: Application;

  private isNew:boolean = true;

  appForm: FormGroup;

  constructor(private sls: ShoppingListService,
              private route: ActivatedRoute,
              private applicatonService: ApplicationService,
              private router: Router,
              private formBuilder: FormBuilder,
            ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.appIndex = params['app_id'];
        if(this.appIndex != -1) {
          this.isNew = false;
        }
        this.appCategoryIndex = params['id'];
        this.selectedApplication = this.applicatonService.getAppByCategoryIdAndAppId(this.appCategoryIndex, this.appIndex);
        this.initForm();
      }
    );
  }

  private initForm() {
    debugger;
    let appName = '';
    let appImageUrl = 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg';
    let appDescription = 'This is app description default';

    if(!this.isNew) {
      appName = this.selectedApplication.name;
      appImageUrl = this.selectedApplication.imagePath;
      appDescription = this.selectedApplication.description;
    }

    this.appForm = this.formBuilder.group({
      name: [appName, Validators.required],
      imagePath: [appImageUrl],
      description: [appDescription]
    });

  }

  onCancelEdit() {
    this.navigateBack();
  }

  onSubmit() {
    if(this.isNew) {
      const newApplication = this.appForm.value;
      this.applicatonService.addNewAppByCategoryId(this.appCategoryIndex, newApplication);
      this.router.navigate(['/categories', this.appCategoryIndex, 'apps']);
    } else {
      const newApplication = this.appForm.value;
      this.applicatonService.updateAppByCategoryIdAndAppId(this.appCategoryIndex, this.appIndex, newApplication);
      this.navigateBack();
    }
  }

  private navigateBack() {
    this.router.navigate(['/categories', this.appCategoryIndex, 'apps', this.appIndex, 'details']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}