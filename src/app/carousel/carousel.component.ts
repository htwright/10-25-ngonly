import { Component, Input, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import * as $ from 'jquery';
import {TitleRow} from '../hidive/hidive.component';
// import * as slick from 'slick';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  @Input() arr:Array<object>;
  public items:Array<any> = [];
  constructor(){
    console.log(this.arr);
    this.items = this.arr;
    
  }

  ngOnInit(){
      // var s = document.createElement("script");
      // s.type = "text/javascript";
      // s.src = "../assets/global/scripts/datatable.js";
      // this.elementRef.nativeElement.appendChild(s);
      // var s1 = document.createElement("script");
      // s1.type = "text/javascript";
      // s1.src = "../assets/pages/scripts/table-datatables-responsive.min.js";
      // this.elementRef.nativeElement.appendChild(s1);
      // var s2 = document.createElement("script");
      // s2.type = "text/javascript";
      // s2.src = "../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js";
      // this.elementRef.nativeElement.appendChild(s2);
      // var s3 = document.createElement("script");
      // s3.type = "text/javascript";
      // s.src = "../assets/global/plugins/datatables/datatables.min.js";
      // this.elementRef.nativeElement.appendChild(s3);
      
      
      
    $('h1').css('color:red');
    // $('.carousel').slick({
    //   infinite:true,
    //   slidesToShow: 3,
    //   slidesToScroll: 3
    // });
  }

}


