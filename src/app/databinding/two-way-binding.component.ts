import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input text="text" [(ngModel)]="person.name">
    <input text="text" [(ngModel)]="person.name">
  `,
  styles: []
})
export class TwoWayBindingComponent {
  person = {
    name: 'Max',
    age: 27
  }
}
