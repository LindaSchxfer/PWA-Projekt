import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HinzufuegenComponent } from './hinzufuegen/hinzufuegen.component';
import { UebersichtComponent } from './uebersicht/uebersicht.component';


/* Wenn ich VS Code verwende, dann werden meine Komponenten automatisch importiert --> Verweis auf Seite
Leere Route '' --> Quasi Startbildschirm */
const routes: Routes = [
  { path: '', component: UebersichtComponent },
  { path: 'uebersicht', component: UebersichtComponent },
  { path: 'hinzufuegen', component: HinzufuegenComponent },
  { path: 'aendern/:id', component: EditComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
