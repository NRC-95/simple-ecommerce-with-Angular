import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @Input() name!: string;
  @Input() property!: string;
  @Input() id!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
