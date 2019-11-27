import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
    paraContent = ['password=tuna'];
    count = 1;
    paraContent1;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
     if ( this.count === 1) {
       this.paraContent = [];
     }
     this.paraContent.push(String(this.count++));
   }
   getColor() {
     if ( this.count > 5 ) {
         return 'green';
     }

   }
}
