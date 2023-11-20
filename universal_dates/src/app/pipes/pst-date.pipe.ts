import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pstDate'
})
export class PstDatePipe implements PipeTransform {

  transform(value: string, format: string): string {
    if (!value) return new Date().toString();

    const datePipe = new DatePipe('en-US');
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'America/Los_Angeles',
      timeZoneName: 'shortOffset'
    };
    const gmt = new Intl.DateTimeFormat('en-US', options).format(new Date(value)).split(' ')[1];

    return datePipe.transform(value, format, gmt) || '';
  }

}
