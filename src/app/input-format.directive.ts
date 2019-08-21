import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input ('format') format ;
  constructor( private ref:ElementRef) { }
  @HostListener('focus') onFoucs(){
  console.log('Foucs')
  //window.alert('Foucs')
  }
  /*@HostListener('blur') onBlur(){
  let getValue:string = this.ref.nativeElement.value;
  this.ref.nativeElement.value = getValue.toUpperCase();
  //console.log('Blur')
    //window.alert('Bulr')

  }*/
  @HostListener('blur') onBlur(){
    let getValue:string = this.ref.nativeElement.value;
    if(this.format ==="toUpperCase"){
      this.ref.nativeElement.value = getValue.toUpperCase();
    }
    else if(this.format ==="toLowerCase"){
      this.ref.nativeElement.value = getValue.toLowerCase();
    }
    else{
      this.ref.nativeElement.value = getValue.toUpperCase();
    }
    //console.log('Blur')
      //window.alert('Bulr')

    }
}
