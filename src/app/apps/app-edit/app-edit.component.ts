import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ApplicationService } from '../application.service';
import { Application } from '../application';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'as-app-edit',
  templateUrl: './app-edit.component.html'
})
export class AppEditComponent implements OnInit, OnDestroy {

  appForm: FormGroup;
  private appIndex: number;
  private subscription: Subscription;
  private application: Application;
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
          this.appIndex = +params['id'];
          this.application = this.applicationService.getApp(this.appIndex);
        } else {
          this.isNew = true;
          this.application = null;
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
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew) {

      if(this.application.hasOwnProperty('ingredients')) {
        for(let i = 0; i < this.application.ingredients.length; i++) {
          recipeIngredients.push(
            new FormGroup(
              {
                name: new FormControl(this.application.ingredients[i].name, Validators.required),
                amount: new FormControl(this.application.ingredients[i].amount, [
                  Validators.required,
                  Validators.pattern("\\d+")])
              }
            )
          );
        }
      }

      recipeName = this.application.name;
      recipeImageUrl = this.application.imagePath;
      recipeContent = this.application.description;
    }

    this.appForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });


  }

  onSubmit() {
    const newApplication = this.appForm.value;
    if(this.isNew) {
      this.applicationService.addApp(newApplication);
    } else {
      this.applicationService.editApp(this.application, newApplication);
    }

    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(name: string, amount: string) {
      (<FormArray>this.appForm.controls['ingredients']).push(
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
    (<FormArray>this.appForm.controls['ingredients']).removeAt(index);
  }

}
