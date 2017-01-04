import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ApplicationService } from '../services/application.service';
import { ApplicationCategory } from '../models/application-category';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-category-edit',
  templateUrl: './app-category-edit.component.html'
})
export class AppCategoryEditComponent implements OnInit, OnDestroy {

  appCategoryForm: FormGroup;
  private appCategoryIndex: number;
  private subscription: Subscription;
  private applicationCategory: ApplicationCategory;
  private isNew = true;

  constructor(private route: ActivatedRoute,
              private applicationService: ApplicationService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.isNew = false;
          this.appCategoryIndex = +params['id'];
          this.applicationCategory = this.applicationService.getAppCategory(this.appCategoryIndex);
        } else {
          this.isNew = true;
          this.applicationCategory = null;
        }
        console.log(this.isNew);
        this.initForm();
      }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let appCategoryName = '';
    let appCategoryImageUrl = '';
    let appCategoryContent = '';
    let appApplications: FormArray = new FormArray([]);

    if(!this.isNew) {

      if(this.applicationCategory.hasOwnProperty('applications')) {
        for(let i = 0; i < this.applicationCategory.applications.length; i++) {
          appApplications.push(
            new FormGroup(
              {
                name: new FormControl(this.applicationCategory.applications[i].name, Validators.required),
                amount: new FormControl(this.applicationCategory.applications[i].amount, [
                  Validators.required,
                  Validators.pattern("\\d+")])
              }
            )
          );
        }
      }

      appCategoryName = this.applicationCategory.name;
      appCategoryImageUrl = this.applicationCategory.imagePath;
      appCategoryContent = this.applicationCategory.description;
    }

    this.appCategoryForm = this.formBuilder.group({
      name: [appCategoryName, Validators.required],
      imagePath: [appCategoryImageUrl, Validators.required],
      description: [appCategoryContent, Validators.required],
      applications: appApplications
    });


  }

  onSubmit() {
    const newApplicationCategory = this.appCategoryForm.value;
    if(this.isNew) {
      this.applicationService.addAppCategory(newApplicationCategory);
    } else {
      this.applicationService.editAppCategory(this.applicationCategory, newApplicationCategory);
    }

    this.router.navigate(['/categories']);
  }

  onCancel() {
    this.router.navigate(['/categories', this.appCategoryIndex]);
  }

  onAddItem(name: string, amount: string) {
      (<FormArray>this.appCategoryForm.controls['applications']).push(
        new FormGroup(
          {
            name: new FormControl(name, Validators.required),
            amount: new FormControl(amount, [
              Validators.required,
              Validators.pattern("\\d+")])
          }
        )
      );
  }

  onRemoveItem(index: number) {
    (<FormArray>this.appCategoryForm.controls['applications']).removeAt(index);
  }

}
