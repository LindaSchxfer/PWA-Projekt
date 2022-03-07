import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../shopping-item';
import { ShoppingItemService } from '../shopping-item.service';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.css']
})
export class UebersichtComponent implements OnInit {

  shoppingItems: ShoppingItem[] = [];

  constructor(private shoppingItemService: ShoppingItemService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  /*async add(title: string) {
    await this.shoppingItemService.add();
    await this.loadItems();
  }*/

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
}
console.log("hurra, die Übersichtsseite lädt endlich");
