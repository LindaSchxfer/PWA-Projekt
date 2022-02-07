import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UebersichtComponent } from './uebersicht/uebersicht.component';

const routes: Routes = [
  { path: '', component: UebersichtComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
