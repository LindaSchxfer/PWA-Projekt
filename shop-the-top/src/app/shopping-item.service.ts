import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dexie } from 'dexie';
import { v4 } from 'uuid';
import { ShoppingItem } from './shopping-item';


@Injectable({
  providedIn: 'root'
})

export class ShoppingItemService extends Dexie{
shoppingItems!: Dexie.Table<ShoppingItem, string>;
  
  constructor(private httpClient: HttpClient) { 
   
    super('ShoppingItemDB');
    
    this.version(1).stores({
      shoppingItems: 'id'
    });
  }

  getAll() {
    return this.shoppingItems.toArray();
  }
  
  add(productname: string, quantity: number, place: string, unit: string) {
    return this.shoppingItems.add({productname, quantity, place, unit, id: v4(), done: false});
  }

  getByProductname(/*productname: string*/) {
    console.log("Toll");
  }
  
}