import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>Root Component</h1>
    <app-databinding></app-databinding>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
}
