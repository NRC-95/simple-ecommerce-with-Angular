import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() picture: string = '';
  @Input() name: string = '';
  @Input() price: number = -1;
  @Input() status: string = '';
  @Input() content: string = '';
  @Input() usingAdvice: string = '';
  @Input() properties: string = '';
  @Input() index: number = -1;
  @Input() id!: number;

  screenHeight!: number;
  screenWidth!: number;
  
  constructor(private productService: ProductService) { 
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }

}
