import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'q';
export class UniqnessValidator{
  static checkUniquness(control:AbstractControl) : Promise<ValidationErrors> | null{


  return new Promise((resolve,  reject)=>{
    setTimeout(() => {
      if(control.value == "ibrahimeahmed23@gmail.com"){
        resolve ({shouldBeUnique:true});
      }
      else{
        resolve (null);
      }
    }, 1000);

  })
  }
}

