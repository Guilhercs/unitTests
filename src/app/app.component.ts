import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { pluck, range } from './shared/utils/utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  ngOnInit() {
    const data = [
      { id: '1', name: 'foo' },
      { id: '2', name: 'bar' },
      { id: '3', name: 'baz' },
    ];
    console.log(range(1, 5));
    console.log(pluck(data, 'id'));
  }
}
