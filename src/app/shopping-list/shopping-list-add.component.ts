import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Application } from '../shared/application';
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'as-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  @Input() item: Application;
  @Output() cleared = new EventEmitter();

  isAdd = true;

  constructor(private sls: ShoppingListService) {}

  ngOnChanges(changes) {
    if(changes.item.currentValue  === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(application: Application) {
    const newApplication = new Application(application.name, application.amount);
    if(!this.isAdd) {
      this.sls.editItem(this.item, newApplication);
      this.onClear();
    } else {
      this.item = newApplication;
      this.sls.addItem(this.item);
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
