import { Component, OnInit } from '@angular/core';
import { TalentsService } from './talents.service';
import { Observable } from 'rxjs';
import { TalentProfile } from './talent-profile/talent-profile.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.scss']
})
export class TalentsComponent implements OnInit {
  talents$: Observable<TalentProfile[]> = this.talentsService.getState();

  constructor(private talentsService: TalentsService, private router: Router) { }

  ngOnInit() {
  }

  gotToTalentProfileByEmail(email: string) {
    this.router.navigateByUrl(`talents/${email}`);
  }

}
