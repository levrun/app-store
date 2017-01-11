import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'as-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    $(document).ready(function(){
      $('.carousel').carousel();
    });
  }

}
