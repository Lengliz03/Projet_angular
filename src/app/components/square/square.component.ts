import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value: string | null = null;
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
