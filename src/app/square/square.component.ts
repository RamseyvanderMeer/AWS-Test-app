import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div>
      <button nbButton hero status="info" *ngIf="!value">{{ value }}</button>
      <button nbButton hero status="success" *ngIf="value == 'X'">
        {{ value }}
      </button>
      <button nbButton hero status="danger" *ngIf="value == 'O'">
        {{ value }}
      </button>
    </div>
  `,
  styles: [
    'button { text-align: center; font-size: 5em; width: 100%; height:100%;  }',
    'div { width: 100%; height:100%; display:flex; justify-content: center; align-items: center; }',
  ],
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
