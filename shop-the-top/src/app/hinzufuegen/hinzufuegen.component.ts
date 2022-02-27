import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../shopping-item';
import { ShoppingItemService } from '../shopping-item.service';

@Component({
  selector: 'app-hinzufuegen',
  templateUrl: './hinzufuegen.component.html',
  styleUrls: ['./hinzufuegen.component.css']
})
export class HinzufuegenComponent implements OnInit {

  shoppingItems: ShoppingItem[] = [];

  constructor(private shoppingItemService: ShoppingItemService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  async add(productname: string, quantity: number, place: string, unit: string) {
    await this.shoppingItemService.add(productname, quantity, place, unit);
    await this.loadTodos();
  }

  /*async sync() {
    await this.shoppingItemService.sync();
    await this.loadTodos();
  }

  async toggleDone(todo: Todo) {
    await this.shoppingItemService.toggleDone(todo);
    await this.loadTodos();
  }*/

  async loadTodos() {
    this.shoppingItems = await this.shoppingItemService.getAll();
  }

}
console.log("hurra, die Hinzufügenseite lädt endlich");