import { Injectable, EventEmitter } from '@angular/core';
import { ApplicationCategory } from './models/application-category';
import { Ingredient } from "../shared";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class ApplicationService {
  appsCategoriesChanged = new EventEmitter<ApplicationCategory[]>();

  private applicationsCategories: ApplicationCategory[] = [];

  constructor(private http: Http) { }

  getApplicationsCategories() {
    this.fetchData();
  }

  getAppCategory(id: number) {
    return this.applicationsCategories[id];
  }

  deleteAppCategory(applicationCategory: ApplicationCategory) {
    this.applicationsCategories.splice(this.applicationsCategories.indexOf(applicationCategory), 1);
    this.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  addAppCategory(applicationCategory: ApplicationCategory) {
    if(this.applicationsCategories === null) {
      this.applicationsCategories = [];
    }
    this.applicationsCategories.push(applicationCategory);
    this.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  editAppCategory(oldApplicationCategory: ApplicationCategory, newApplicationCategory: ApplicationCategory) {
    this.applicationsCategories[this.applicationsCategories.indexOf(oldApplicationCategory)] = newApplicationCategory;
    this.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  storeData() {
    console.log("storeData");
    const body = JSON.stringify(this.applicationsCategories);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://angular2-course-8b269.firebaseio.com/categories.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://angular2-course-8b269.firebaseio.com/categories.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: ApplicationCategory[]) => {
          this.applicationsCategories = data;
          this.appsCategoriesChanged.emit(this.applicationsCategories);
        }
      )
  }

}
