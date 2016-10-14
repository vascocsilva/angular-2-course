import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
    <h1>Root Component</h1>
    <app-databinding></app-databinding>
    <hr>
    <app-lifecycle *ngIf="!delete"></app-lifecycle>
    <button (click)="cenas()">click to delete</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  delete = false;
  title = 'I changed it!';

  cenas() {
    console.log('delete...................................');
    this.delete = !this.delete;
  }
}
