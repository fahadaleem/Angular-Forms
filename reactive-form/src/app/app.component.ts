import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-form';
  selectedTab = 'form-control';

  handleSelectTab(tabName: string) {
    this.selectedTab = tabName;
  }
}
