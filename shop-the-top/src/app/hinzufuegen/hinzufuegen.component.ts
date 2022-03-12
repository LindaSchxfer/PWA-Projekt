import { Component, OnInit } from '@angular/core';
import { HinweisComponent } from '../hinweis/hinweis.component';
import { ShoppingItem } from '../shopping-item';
import { ShoppingItemService } from '../shopping-item.service';

@Component({
  selector: 'app-hinzufuegen',
  templateUrl: './hinzufuegen.component.html',
  styleUrls: ['./hinzufuegen.component.css']
})
export class HinzufuegenComponent implements OnInit {

  isInfoVisible: string = '';
  shoppingItems: ShoppingItem[] = [];

  constructor(private shoppingItemService: ShoppingItemService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  async add(productname: string, quantity: string, place: string, unit: string) {
    await this.shoppingItemService.add(productname, quantity, place, unit);
    await this.showMeInfo();
    await this.loadItems();
  }

  /*async sync() {
    await this.shoppingItemService.sync();
    await this.loadItems();
  }

  async toggleDone(item: ShoppingItem) {
    await this.shoppingItemService.toggleDone(item);
    await this.loadItems();
  }*/
 
  async loadItems() {
    this.shoppingItems = await this.shoppingItemService.getAll();
  }
  
  async showMeInfo() {
  const hinweis = document.getElementById("hinweis");
  if (hinweis!=null){
    hinweis.classList.toggle("noInfo");
    /*window.setTimeout(()=> this.dontShowMeInfo, 20000);*/
  }
  
 }

  dontShowMeInfo() {
  let hinweis = document.getElementById("hinweis");
  if (hinweis!=null){
    hinweis.classList.toggle("noInfo");
  }
 }

}
console.log("hurra, die Hinzufügenseite lädt endlich");