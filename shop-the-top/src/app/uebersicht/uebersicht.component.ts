import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../shopping-item';
import { ShoppingItemService } from '../shopping-item.service';
import { EditComponent } from '../edit/edit.component'; 
import { FormControl, FormGroup } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.css']
})
export class UebersichtComponent implements OnInit {

  shoppingItems: ShoppingItem[] = [];
  ort: string = '';
 

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

 async ortWahl(ortVariable: string){
   this.ort = ortVariable;
   console.log(this.ort);
   this.loadItems();
 }
  
 async edit(productname: string, quantity: string, place: string, unit: string){
    
      //await this.shoppingItemService.put(productname, quantity, place, unit);
      return this.shoppingItemService.update(productname, quantity, place, unit);
      await this.loadItems();
    
  }

  async loadItems() {
    this.shoppingItems = await this.shoppingItemService.getAll();
  }

  async loeschen(){
    console.log("Alles eingekauft");
    await this.shoppingItemService.clear();
    await this.loadItems();  
  }
}


