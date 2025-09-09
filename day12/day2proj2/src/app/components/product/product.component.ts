import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() item: any;
  @Output() addToCart = new EventEmitter<any>();

  @Output() delete = new EventEmitter<any>();

  // after input send and only one like useEffect
  // ngOnInit() {
  //   console.log(this.item);
  // }

  ngOnChanges(changes: SimpleChanges) {
    changes[this.item];
    // console.log(this.item);
  }

  onAddToCart() {
    this.addToCart.emit(this.item);
  }

  deleteItem() {
    this.delete.emit(this.item);
  }
  more = false;
  seeMore() {
    this.more = !this.more;
  }
}
