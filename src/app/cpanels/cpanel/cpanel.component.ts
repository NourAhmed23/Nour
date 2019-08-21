import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css']
})
export class CpanelComponent implements OnInit {
  isColor=true;

  defualtView='courses5';
  setView(selectedView){
    this.defualtView = selectedView
  }
  courses=[
  'Html',
  'Js',
  'Css'
]
courses2=[
  {'id':1,'CourseName':'Css'},
  {'id':2,'CourseName':'Js'},
  {'id':3,'CourseName':'Html'},
  {'id':4,'CourseName':'Sass'},
]
onAdd(){
  this.courses.push("Angular")
}
onRemove(course2){
  let index = this.courses2.indexOf(course2)
  this.courses2.splice(index,1)
}
trackByCourse(index,course2){
  return course2 ? course2.id :undefined
}
onAdd2(){
  this.courses2.push({'id':5,'CourseName':'Angular'})
}
onRemove2(course2){
  let index = this.courses2.indexOf(course2)
  this.courses2.splice(index,1)
}
items=[
  {
  name:'Ahmed',
  age:20,
  city:'cairo',
  school:{
    first:'school: '+ 1,
    second:'school: '+ 2,
    third:'school: '+ 3,
  }
},
{
  name:'Ibrahim',
  age:19,
  city:'Asyut',
  school:{
    first:'school: '+ 4,
    second:'school: '+ 5,
    third:'school: '+ 6,
  }
},
{
  name:'Hend',
  age:22,
  city:'Egypt',
  school:{
    first:'school: '+ 7,
    second:'school: '+ 8,
    third:'school: '+ 9,
  }
}
]


  constructor() { }

  ngOnInit() {
  }

}
