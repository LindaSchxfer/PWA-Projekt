import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HinzufuegenComponent } from './hinzufuegen/hinzufuegen.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';


const routes: Routes = [
  { path: '', component: UebersichtComponent },
  { path: 'hinzufuegen', component: HinzufuegenComponent },
  { path: 'aendern/:id', component: EditComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
