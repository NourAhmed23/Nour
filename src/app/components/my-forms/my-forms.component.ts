import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.css']
})
export class MyFormsComponent implements OnInit {
  name="";
  lname="";
  age=0;
  verfiyForm="";
  // name="";
  //  myShop=['Apple','orange','watermilon']
  // mySubmit(){
  //   this.myShop.push(this.name)
  // }


  mySubmit({value,valid}){
    if(valid){
      this.verfiyForm=value;
    }else{
      this.verfiyForm="Not Valid"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
