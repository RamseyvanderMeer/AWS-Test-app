import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div >
      <p>{{ value }}</p>
    </div>
  `,
  styles: [
    'p { text-align: center; font-size: 5em; }',
    'div { width: 100%; height:100%; display:flex; justify-content: center; align-items: center; }',
  ],
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
