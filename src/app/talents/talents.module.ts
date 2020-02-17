import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TalentsComponent } from './talents.component';
import { TalentProfileComponent } from './talent-profile/talent-profile.component';
import { MaterialModule } from '../shared/material/material.module';
import { FieldComponent } from './talent-profile/field/field.component';
import { FieldPipe } from './talent-profile/field/field.pipe';
import { CoreModule } from '../core/core.module';
import { ParseByTypePipe } from './talent-profile/field/parse-by-type.pipe';



@NgModule({
  declarations: [
    TalentProfileComponent,
    TalentsComponent,
    FieldComponent,
    FieldPipe,
    ParseByTypePipe],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', component: TalentsComponent},
      {path: ':email', component: TalentProfileComponent}
    ])
  ]
})
export class TalentsModule { }
