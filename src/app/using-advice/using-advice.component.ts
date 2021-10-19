import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-using-advice',
  templateUrl: './using-advice.component.html',
  styleUrls: ['./using-advice.component.css']
})
export class UsingAdviceComponent implements OnInit {

  products!: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.products;
  }

}
