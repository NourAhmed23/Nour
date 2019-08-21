import { Component, OnInit } from '@angular/core';
import { Persons} from './Persons';
@Component({
  selector: 'app-hema',
  templateUrl: './hema.component.html',
  styleUrls: ['./hema.component.css']
})
export class HemaComponent implements OnInit {
  birthday = new Date(2000, 3, 23);
  mySalary = 4000;
  myRate = 15.20;
 suName="sultan abdulhamid"; 
 sultanName=true;
 myNumber=100;
 myImage="http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png";
 myClassCss=true;
 myClassCss2=false;
 totalClass={};
 myClass2=false;
 myClass3=true;

 classFunction(){
   this.totalClass={
    mycolor2:this.myClass2,
    mycolor3:this.myClass3
   }
 };
//  sultanName=false; // if this false the name مش هيضهر
people=["ahmed","muhamed","ali","osama"];
jop=["developer","system admin","programmer","network"];
plang=[
  {
  languageName:'JAVA',
  shortcut:'jasmine',
  city:'inda',
  myNewImage:'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
},
{
  languageName:'Angular',
  shortcut:'An',
  city:'asuyt',
  myNewImage:'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
},
{
  languageName:'Paython',
  shortcut:'Py',
  city:'cairo',
  myNewImage:'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
},
{
  languageName:'css',
  shortcut:'cs',
  city:'mansoura',
  myNewImage:'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
},
{
  languageName:'Perl',
  shortcut:'pl',
  city:'new yourk',
  myNewImage:'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
},
]



/*  Person:Persons; // this with interface
  Persons:Persons[];
*/



 /* person:{
    id:number,
    name:string,
    lname:string,
    age:number

  } // this with object */ 
  
  
  
  
  
  /*



  // to add value in one thingonly

  // you can but value in constructor or ngOnInt only i mean you shodn.t but vlue in this var
  name:string = "3obad";// or name= "3obad";
  lname="Ahmed";// or lname:string= "Ahmed";
  age=25;// or age:number= "25";
  secondAge:any=50;
  // to add more things in one thing
  employee={name:'ali', lname:'muhamed' , age:40}
  age1:[number,string]; // this way to can but 2 type in 1 value


  */
  constructor() {

    this.classFunction();
/*// use this with object
    this.Person={
      id:2,
    name:'string',
    lname:'string',
    age:2
  
    },
// use this with interface
    this.Persons=[{
      id:1,
    name:'string1',
    lname:'string1',
    age:20
  
    },{
      id:2,
    name:'string2',
    lname:'string2',
    age:25
  
    },{
      id:3,
    name:'string3',
    lname:'string3',
    age:30
  
    }]

*/



  /*
    this.name='amr';// but if i write here number browser give me erorr
    this.lname='warda';// but if i write here number browser give me erorr
    this.age=55; // but if i write here string browser give me erorr
    this.secondAge=50;// you can type string here
    this.age1=[20,"student"];
    this.changeName(); // this is way to run function or in ngOnInit()


    */
   }

  ngOnInit() {
/*

    // this.employee.name='H';
    this.employee.lname='dabor';
    this.employee.age=50;
    this.changeAge();// this is way to run function or in ngOnInit()

*/
  }

  /*
  changeName(){
    this.employee.name='H+'; // this no start until runn it 
  }
  changeAge(){
    this.employee.age=10; // this no start until runn it 
  }
  */
}

/*
// you can but interface in spcial file
interface Persons{
  id:number,
  name:string,
  lname:string,
  age:number

}*/