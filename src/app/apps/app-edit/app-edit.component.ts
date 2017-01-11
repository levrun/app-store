import { Application } from '../../shared/application';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ApplicationService } from '../services/application.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-edit',
  templateUrl: 'app-edit.component.html'
})
export class AppEditComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscription: Subscription;
  private appIndex: number;
  private appCategoryIndex: number;
  selectedApplication: Application;

  private isNew: boolean = true;

  appForm: FormGroup;

  constructor(private sls: ShoppingListService,
    private route: ActivatedRoute,
    private applicatonService: ApplicationService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngAfterViewInit(): void {
    Materialize.updateTextFields(); // in order to fix https://github.com/Dogfalo/materialize/issues/180
  }

  getNameOfTheForm() {
    if (this.isNew) {
      return 'Create new application';
    } else {
      return 'Edit application';
    }
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.appIndex = params['app_id'];
        if (this.appIndex !== -1) {
          this.isNew = false;
        }
        this.appCategoryIndex = params['id'];
        this.selectedApplication = this.applicatonService.getAppByCategoryIdAndAppId(this.appCategoryIndex, this.appIndex);
        this.initForm();
      }
    );
  }

  private initForm() {
    let appName = '';
    let appImageUrl = '';
    let appDescription = '';

    if (!this.isNew) {
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
    if (this.isNew) {
      this.router.navigate(['/categories', this.appCategoryIndex, 'apps']);
    } else {
      this.router.navigate(['/categories', this.appCategoryIndex, 'apps', this.appIndex, 'details']);
    }
  }

  onSubmit() {
    if (this.isNew) {
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
