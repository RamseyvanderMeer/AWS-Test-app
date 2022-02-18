import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{rando}}
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {
  rando: any;
  constructor(){
    setInterval(() => this.rando = Math.round(Math.random()*1000),200)
  }

}
