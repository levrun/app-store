import { Application } from "../shared";

export class ShoppingListService {

  private items: Application[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Application[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Application) {
    this.items.push(item);
  }

  editItem(oldItem: Application, newItem: Application) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Application) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
