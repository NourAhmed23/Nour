import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-directiv',
  templateUrl: './directiv.component.html',
  styleUrls: ['./directiv.component.css']
})
export class DirectivComponent implements OnInit {
  get email(){
    return this.from.get('email')
  }
  get age(){
    return this.from.get('age')
  }
  from = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl(),
    age: new FormControl('', CustomValidators.range([10, 20]))
  })
  constructor() { }

  ngOnInit() {
  }

}
