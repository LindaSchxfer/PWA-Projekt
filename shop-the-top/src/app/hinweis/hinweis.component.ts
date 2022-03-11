import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinweis',
  templateUrl: './hinweis.component.html',
  styleUrls: ['./hinweis.component.css']
})
export class HinweisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 /*function showMeInfo() {
  const hinweis = document.getElementById("hinweis");
  if (hinweis!=null){
    hinweis.className = "info";
    window.setTimeout(dontShowMeInfo, 2000);
  }
  
 }

 function dontShowMeInfo() {
  let hinweis = document.getElementById("hinweis");
  if (hinweis!=null){
    hinweis.className = "noInfo";
  }
 }*/
 
}
