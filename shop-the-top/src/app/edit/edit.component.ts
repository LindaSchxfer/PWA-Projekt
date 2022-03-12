import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../shopping-item';
import { ShoppingItemService } from '../shopping-item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  shoppingItems: ShoppingItem[] = [];
  constructor(private shoppingItemService: ShoppingItemService) { }
  

  ngOnInit(): void {
    this.loadItems();
  }
  async edit(productname: string, quantity: string, place: string, unit: string) {
    await this.shoppingItemService.update(productname, quantity, place, unit);
    await this.loadItems();
  }
  async loadItems() {
    this.shoppingItems = await this.shoppingItemService.getAll();
  }
  
}
