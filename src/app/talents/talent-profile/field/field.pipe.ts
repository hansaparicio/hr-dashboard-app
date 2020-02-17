import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'field'
})
export class FieldPipe implements PipeTransform {
  dictionary = new Map();

  constructor() {
    this.dictionary.set('activeMember', 'TALENT_PROFILE.ACTIVE_MEMBER');
    this.dictionary.set('birthday', 'TALENT_PROFILE.BIRTHDAY');
    this.dictionary.set('city', 'TALENT_PROFILE.CITY');
    this.dictionary.set('gender', 'TALENT_PROFILE.GENDER');
    this.dictionary.set('phoneNumber', 'TALENT_PROFILE.PHONE_NUMBER');
    this.dictionary.set('streetAddress', 'TALENT_PROFILE.STREET_ADDRESS');
    this.dictionary.set('zipCode', 'TALENT_PROFILE.ZIP_CODE');
  }

  transform(value: any): any {
    return this.dictionary.get(value);
  }


}
