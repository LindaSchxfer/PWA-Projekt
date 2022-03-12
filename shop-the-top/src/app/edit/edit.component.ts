import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { liveQuery } from 'dexie';
import { ShoppingItem } from '../shopping-item';
import { ShoppingItemService } from '../shopping-item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  selectedItems: ShoppingItem[] = [];
  id = this.route.snapshot.params['id'];
  
  constructor(private shoppingItemService: ShoppingItemService, private route: ActivatedRoute) {

   }
  

  ngOnInit(): void {
    console.log("editseite")
    console.log(this.searchForItemById());
  }
  
  async edit(productname: string, quantity: string, place: string, unit: string) {
    this.shoppingItemService.edit( this.id, productname, quantity, place, unit);
  }

  async searchForItemById() { 
    this.selectedItems = await this.shoppingItemService.getById(this.id);
  } 

  async update(){
    console.log("updaten");
  }
}
  
