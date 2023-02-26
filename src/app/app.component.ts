import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'counter-app';
  counter : number = 0;

  onIncrement = () => {
    this.counter++;    
}

  onDecrement = () => {
    this.counter--;    
}

  onReset = () => {
    this.counter = 0;
}
}
