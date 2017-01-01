import { Component, OnInit } from '@angular/core';

import { Application } from "../shared";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'as-shopping-list',
  templateUrl: 'shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Application[] = [];

  selectedItem: Application = null;

  constructor(private sls: ShoppingListService) {}

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item: Application) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }

}
