import { Injectable } from '@angular/core';
import { Store } from '../core/store/store';
import { TalentProfile } from './talent-profile/talent-profile.interface';
import { TALENTS_MOCK } from './talents.mock';

@Injectable({
  providedIn: 'root'
})
export class TalentsService extends Store<TalentProfile[]> {

  constructor() {
    super(TALENTS_MOCK);
  }

  getProfileByEmail(email: string): TalentProfile | null {
    return this.getValue().find(i => i.email === email);
  }
}
