import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-test.component.html',
  styleUrl: './input-test.component.css',
})
export class InputTestComponent {
  @Input() message: string = 'Something went wrong';
}
