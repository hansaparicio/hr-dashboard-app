import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'parseByType'
})
export class ParseByTypePipe implements PipeTransform {

  transform(value: any): any {
    if (value instanceof Date) {
      return moment(value).format('MM/DD/YYYY');
    } else {
      return value;
    }
  }

}
