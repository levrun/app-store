import { Injectable, EventEmitter } from '@angular/core';
import { Application } from './application';
import { Ingredient } from "../shared";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class ApplicationService {
  recipesChanged = new EventEmitter<Application[]>();

  private applications: Application[] = [
    new Application('Schnitzel', 'Very tasty', 'https://smartcoderteam.github.io/images/alexei.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Application('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('Lettuce', 3),
      new Ingredient('Melon', 1)
    ])
  ];

  constructor(private http: Http) { }

  getApplications() {
    return this.applications;
  }

  getRecipe(id: number) {
    return this.applications[id];
  }

  deleteRecipe(application: Application) {
    this.applications.splice(this.applications.indexOf(application), 1);
  }

  addRecipe(application: Application) {
    this.applications.push(application);
  }

  editRecipe(oldApplication: Application, newApplication: Application) {
    this.applications[this.applications.indexOf(oldApplication)] = newApplication;
  }

  storeData() {
    const body = JSON.stringify(this.applications);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://angular2-course-8b269.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://angular2-course-8b269.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Application[]) => {
          this.applications = data;
          this.recipesChanged.emit(this.applications);
        }
      )
  }

}
