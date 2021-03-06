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
    })
    this.version(2).stores({
      shoppingItems: 'id, place'
    })
  }

  getAll() {
    return this.shoppingItems.toArray();
  }
  
  add(productname: string, quantity: string, place: string, unit: string) {
    console.log("Item added");
    return this.shoppingItems.add({productname, quantity, place, unit, id: v4(), done: false});
  }

  getByPlace(searchedPlace: string) {
    return this.shoppingItems.where({place: searchedPlace}).toArray();
  }
  

  
  deleteByPlace(searchedPlace: string) {
    this.shoppingItems.where({place: searchedPlace}).delete();
  }

  clear() {
    return this.shoppingItems.clear();
  }
  item_delete(id: string, productname: string, quantity: string, place: string, unit: string) {
    return this.shoppingItems.delete(id);
  }

 edit( id: string, productname: string, quantity: string, place: string, unit: string){
    console.log("Edit");
    return this.shoppingItems.update (id,{productname, quantity, place, unit, id: v4(), done: false} )
    
  }

  getById(searchedId: string){
    return this.shoppingItems.where({id: searchedId}).toArray();
  }

  crossOut(item: ShoppingItem){
    item.done = !item.done;
    return this.shoppingItems.put(item);
  }
}

