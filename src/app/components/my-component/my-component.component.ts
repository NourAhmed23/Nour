import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  title='One Page';
  isActive=true;
  isActive2=true;
  methodName(){
    alert('Welcome Event Binding');
    console.log('Welcome Event Binfing')
  }
  divClicked(){
    console.log('Div is Clicked')
  }
  btnClicked($event){
    console.log('Button is Clicked:',$event)
  }
  btnClicked2($event){
    $event.stopPropagation();

    console.log('Button is Clicked:')
  }
  onKeyUp($event){
  console.log('Key up ', $event)
  }
  onKeyUp2($event){
    if($event.keyCode == 13){
      alert('Enter was Pressed');
      console.log('Enter Was Pressed')
    }
    }
    nameValue;
    onKeyUp3($event){
      this.nameValue=($event.target.value)

      }
      nameValue2;
      onKeyUp4(firstName){
        this.nameValue2=(firstName)

        }
        nameValue3;
      onKeyUp5(lastName){
        this.nameValue3=(lastName);
        console.log(lastName)

        }
        nameValue4='Hema';
        name='  Your Name';
        onKeyUp6(){
        console.log(this.nameValue4)

        }
        nameVal='Hema1';
        onKeyUp7(fName){
          this.nameVal=fName;
          console.log(this.nameVal)
        }
        onKeyUp8(hName){
          console.log(hName)
        }
  constructor() {

  }

  ngOnInit() {
  }

}
