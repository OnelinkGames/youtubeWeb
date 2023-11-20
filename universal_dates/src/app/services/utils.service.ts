import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getGMTFromDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZoneName: 'shortOffset'
    };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date)).split(' ')[1];
  }
}
