import { Component, OnInit } from '@angular/core';
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
    if(productname!){
      await this.shoppingItemService.add(productname, quantity, place, unit);
    } else {
      console.log("Keine Eingabe bei Produktname")
    }
    await this.loadItems();
  }
 
  async loadItems() {
    this.shoppingItems = await this.shoppingItemService.getAll();
  }

}
console.log("hurra, die Hinzufügenseite lädt endlich");