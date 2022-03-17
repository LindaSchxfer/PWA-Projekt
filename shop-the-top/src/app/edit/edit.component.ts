import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private shoppingItemService: ShoppingItemService, private route: ActivatedRoute, private router: Router) {

   }
  

  ngOnInit(): void {
    console.log("editseite")
    console.log(this.searchForItemById());
  }
  
  async edit(productname: string, quantity: string, place: string, unit: string) {
    this.shoppingItemService.edit( this.id, productname, quantity, place, unit);
    this.router.navigate(['/uebersicht'])
  }

  async searchForItemById() { 
    this.selectedItems = await this.shoppingItemService.getById(this.id);
  } 

  async update(){
    console.log("updaten");
  }
}
  
