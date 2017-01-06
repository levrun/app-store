import { Component, EventEmitter } from '@angular/core';

import { ApplicationService } from './apps/services/application.service';

import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'as-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  public isCollapsed:boolean = false;

  constructor(private applicationService: ApplicationService) {}

  modalActions = new EventEmitter<string|MaterializeAction>();
    openModal() {
      this.modalActions.emit({action:"modal",params:['open']});
    }
    closeModal() {
      this.modalActions.emit({action:"modal",params:['close']});
    }

  onStore() {
    this.applicationService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch() {
    this.applicationService.fetchData();
  }


}
