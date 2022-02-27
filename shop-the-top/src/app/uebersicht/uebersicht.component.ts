import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.css']
})
export class UebersichtComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    console.log("Übersicht ist da");
  }
}
console.log("hurra, die Übersichtsseite lädt endlich");
