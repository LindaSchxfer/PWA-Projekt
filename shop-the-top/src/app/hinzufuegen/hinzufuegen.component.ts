import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinzufuegen',
  templateUrl: './hinzufuegen.component.html',
  styleUrls: ['./hinzufuegen.component.css']
})
export class HinzufuegenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Hinzufügen ist da");
  }

}
