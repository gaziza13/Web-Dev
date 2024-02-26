import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [...products];
  searchInput: string = '';
  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
  const routeParams = this.route.snapshot.paramMap;
  const categoryIdFromRoute = Number(routeParams.get('categoryId'));

  this.products = products.filter(products => products.categoryId === categoryIdFromRoute);
  }

  like(product: Product) {
    product.likes++;
  }

  delete(product: Product) {
    const index = this.products.indexOf(product);
  
    if (index !== -1) {
      this.products.splice(index, 1);
      window.alert('Product has been deleted');
    } else {
      window.alert('Product not found');
    }
  }

  get filteredProducts(): Product[] {
    const searchTerm = this.searchInput.toLowerCase();
    return this.products.filter(product => product.name.toLowerCase().includes(searchTerm));
  }

  share() {
    const url = `https://telegram.me/share/url?url=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, '_blank');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
