import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click Me</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output('clickable') clicked = new EventEmitter<string>(); // use string, typed thing (could be object...)
  // @Outpu makes the event emition available outside the component
  // 'clickable' is the name of event recognizable outside the component (not usually done this way)

  onClicked() {
    this.clicked.emit('it works!');
  }
}
