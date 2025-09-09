import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-stydent',
  templateUrl: './single-stydent.component.html',
  styleUrls: ['./single-stydent.component.css'],
})
export class SingleStydentComponent {
  @Input() item: any;
  // send update event to parent
  @Output() update = new EventEmitter<any>();

  updateStd() {
    this.update.emit(this.item);
  }
}
