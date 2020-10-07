import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'platzi-store';
  input = '';
  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  addItem(): any {
    this.array.push(this.title)
  }
  deleteItem(index: number) {
    this.array.splice(index, 1)
  }
}
