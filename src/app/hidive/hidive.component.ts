import { Component, OnInit } from '@angular/core'; 
import { Http } from '@angular/http'; 
 
 
@Component({ 
  selector: 'hidive', 
  templateUrl: './hidive.component.html', 
  styleUrls: ['./hidive.component.css'] 
}) 
export class HidiveComponent implements OnInit { 
 
  public TitleRows: TitleRow[]; 
 
  constructor(http: Http){ 
    let storage; 
    http.get('//d10xkldqejj5hr.cloudfront.net/dev/dashboard.json').subscribe(result => { 
      console.log(result); 
      storage = result.json(); 
      this.TitleRows = storage['TitleRows']; 
      console.log(this.TitleRows); 
      // this.TitleRows[0].Titles.forEach(row => console.log(row)); 
    }, error => console.error(error)); 
  } 
 
  ngOnInit() { 
  } 
 
} 
export interface TitleRow { 
  Name: string; 
  Titles: object[]; 
 
} 
