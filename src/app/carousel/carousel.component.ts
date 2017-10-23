import { Component, Input, OnChanges, Inject,  } from '@angular/core'; 
import { Http } from '@angular/http'; 
import * as $ from 'jquery'; 
import {TitleRow} from '../hidive/hidive.component'; 
// import * as slick from 'slick'; 
 
@Component({ 
    selector: 'carousel', 
    templateUrl: './carousel.component.html' 
}) 
export class CarouselComponent implements OnChanges { 
  @Input() arr:Array<any>; 
  items:Array<any> = [];
  constructor(){ 
  } 
  ngOnChanges(){
    this.items=this.arr;
    console.log(this.items, 'this items after view checked');
  }
 
 
} 
 