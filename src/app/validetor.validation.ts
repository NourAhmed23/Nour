import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';



export class TextValidator {
  static noSpaceAllowed(control:FormGroup): ValidationErrors |null {
    if((control.value as string).indexOf(' ') != -1) {
      return {noSpaceAllowed : true };
    }
    else{
      return null;
    }
  }
  /*
  static noSpaceAllowed(control:AbstractControl): ValidationErrors |null {
    if((control.value as string).indexOf(' ') != -1) {
      return {noSpaceAllowed : true };
    }
    else{
      return null;
    }
  }
  */
}
