import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'talents',
    loadChildren: () =>
      import('./talents/talents.module').then(mod => mod.TalentsModule)
  },
  { path: '',
    redirectTo: '/talents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
