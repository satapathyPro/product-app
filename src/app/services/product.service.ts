import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', description: 'A high-end gaming laptop.', price: 1200 },
    { id: 2, name: 'Smartphone', description: 'Latest model with great features.', price: 800 },
    { id: 3, name: 'Headphones', description: 'Noise-cancelling over-ear headphones.', price: 250 }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}