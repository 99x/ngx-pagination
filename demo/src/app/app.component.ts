import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  totalRecordCount: number;
  selectedPage: number;
  recordsPerPage: number;

  constructor() {
    this.totalRecordCount = 330;
    this.recordsPerPage = 10;
    this.selectedPage = 1;
  }

  selectPage(page: number) {
    this.selectedPage = page;
  }
}
