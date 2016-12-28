import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { CollapseModule } from 'ng2-bootstrap/collapse';

@Component({
  selector: 'rb-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  public isCollapsed:boolean = false;

  constructor(private recipeService: RecipeService) {}

   public collapsed(event:any):void {
      console.log(event);
    }

    public expanded(event:any):void {
      console.log(event);
    }

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch() {
    this.recipeService.fetchData();
  }


}
