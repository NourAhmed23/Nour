import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cevents',
  templateUrl: './cevents.component.html',
  styleUrls: ['./cevents.component.css']
})
export class CeventsComponent implements OnInit {
  myName="Hema";
  myClick(){
  this.myName="nour"
  this.check=!this.check;
  };
  myDblClick(){
  this.myName="hema";
  this.myName="hema";
  };
  check=true;
  constructor() { }

  ngOnInit() {
  }

}
