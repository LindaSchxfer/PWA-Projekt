import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../shopping-item';
import { ShoppingItemService } from '../shopping-item.service';
import { EditComponent } from '../edit/edit.component'; 
import { CheckboxControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';
import { style } from '@angular/animations';
//import { __values } from 'tslib';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.css']
})
export class UebersichtComponent implements OnInit {

  shoppingItems: ShoppingItem[] = [];
  ort: string = 'Alle';
 

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
  
  async loadItems() {
    switch (this.ort) {
      case "Supermarkt":
        this.shoppingItems = await this.shoppingItemService.getByPlace("Supermarkt");
        break;
      case "Drogerie":
        this.shoppingItems = await this.shoppingItemService.getByPlace("Drogerie");
        break;
      case "Baumarkt":
        this.shoppingItems = await this.shoppingItemService.getByPlace("Baumarkt");
        break;
      case "Fachhandel":
        this.shoppingItems = await this.shoppingItemService.getByPlace("Fachhandel");
        break;
      default:
        this.shoppingItems = await this.shoppingItemService.getAll();
    }
      
  }
    

  async loeschen() {
    switch (this.ort) {
      case "Supermarkt":
        this.shoppingItemService.deleteByPlace("Supermarkt");
        this.loadItems();
        break;
      case "Drogerie":
        this.shoppingItemService.deleteByPlace("Drogerie");
        this.loadItems();
        break;
      case "Baumarkt":
        this.shoppingItemService.deleteByPlace("Baumarkt");
        this.loadItems();
        break;
      case "Fachhandel":
        this.shoppingItemService.deleteByPlace("Fachhandel");
        this.loadItems();
        break;
      default:
        this.shoppingItemService.clear();
        this.loadItems();
    }
  }
  toggle:Boolean=true  

  async crossOut(){
    this.toggle=!this.toggle;
  }
}


