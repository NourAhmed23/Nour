import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

// to get summary
/*
  transform(value: any, limit?:number): any {
    if(!value) return null;
    return value.substr(0,20)+ '........';
  }
  */
  ///
  transform(value: any, limit?:number): any {
    if(!value) return null;
    let actualLimit = (limit) ? limit : 20;
    return value.substr(0,actualLimit)+ '........';
  }

}
