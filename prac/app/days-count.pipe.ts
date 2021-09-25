import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'daysCount'
})
export class DaysCountPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let dt=new Date(value);
    let diff=dt.getTime()-(new Date()).getTime()
    diff=Math.floor(diff/(24*60*60*1000));
    return diff+" days remaining"
  }

}
