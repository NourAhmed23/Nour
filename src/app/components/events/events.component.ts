import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  myClick(){
    console.log("click Me")
  };
  myClick2(name){
    console.log(name)
  };
  myClick3(e,name){
    console.log(e.type,name)
  };
  constructor() { 
    // this.myClick();
  }

  ngOnInit() {
  }

}
