import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { take } from 'rxjs/operators';

import { TalentProfile } from './talent-profile.interface';
import { TalentsService } from '../talents.service';

@Component({
  selector: 'app-talent-profile',
  templateUrl: './talent-profile.component.html',
  styleUrls: ['./talent-profile.component.scss']
})
export class TalentProfileComponent implements OnInit {
  profile$: BehaviorSubject<TalentProfile> = new BehaviorSubject({} as TalentProfile);
  fieldsToShow = {
    gender: null,
    birthday: null,
    phoneNumber: null,
    streetAddress: null,
    city: null,
    zipCode: null,
    activeMember: null
  };

  constructor(private route: ActivatedRoute, private talentsService: TalentsService) { }

  ngOnInit() {
    this.setProfile();
  }

  private async setProfile() {
    const { email } = await this.route.params.pipe(take(1)).toPromise();
    this.profile$.next(this.talentsService.getProfileByEmail(email));
    const hans = new Map(Object.keys(this.fieldsToShow).map(key => [key, this.profile$.value[key]]));
    Object.assign(this.fieldsToShow, Object.fromEntries(hans));
  }

}
