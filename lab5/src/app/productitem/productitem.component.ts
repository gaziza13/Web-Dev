import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.css'
})
export class ProductitemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();
  @Output() like = new EventEmitter<Product>();
  onRemove() {
    this.remove.emit(this.product);
  }

  onLike() {
    this.like.emit(this.product);
  }
  
}
