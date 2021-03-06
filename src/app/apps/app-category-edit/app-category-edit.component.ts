import { ApplicationCategory } from '../models/application-category';
import { ApplicationService } from '../services/application.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-category-edit',
  templateUrl: './app-category-edit.component.html'
})
export class AppCategoryEditComponent implements OnInit, OnDestroy, AfterViewInit {

  appCategoryForm: FormGroup;
  private appCategoryIndex: number;
  private subscription: Subscription;
  private applicationCategory: ApplicationCategory;
  private isNew = true;

  constructor(private route: ActivatedRoute,
              private applicationService: ApplicationService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  getNameOfTheForm() {
    if(this.isNew) {
      return 'Create new category';
    } else {
      return 'Edit category';
    }
  }

  ngAfterViewInit(): void {
    Materialize.updateTextFields(); // in order to fix https://github.com/Dogfalo/materialize/issues/180
  }

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

    if(!this.isNew) {
      appCategoryName = this.applicationCategory.name;
      appCategoryImageUrl = this.applicationCategory.imagePath;
      appCategoryContent = this.applicationCategory.description;
    }

    this.appCategoryForm = this.formBuilder.group({
      name: [appCategoryName, Validators.required],
      imagePath: [appCategoryImageUrl, Validators.required],
      description: [appCategoryContent, Validators.required]
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
    if(this.isNew) {
        this.router.navigate(['/categories']);
    } else {
      this.router.navigate(['/categories', this.appCategoryIndex]);
    }

  }

}
