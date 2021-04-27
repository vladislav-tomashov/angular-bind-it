import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values: Array<number> = [];
  
  onAddGameNumber(options: { value: number }) {
    console.log(options.value);
    this.values.push(options.value);
  }
}
