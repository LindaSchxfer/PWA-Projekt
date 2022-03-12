import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingItem } from '../shopping-item';
import { ShoppingItemService } from '../shopping-item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  selectedItem: ShoppingItem | undefined;
  constructor(private shoppingItemService: ShoppingItemService, private route: ActivatedRoute) {

   }
  

  ngOnInit(): void {
    console.log("editseite")
    const id = this.route.snapshot.params['id'];
    this.selectedItem =  this.shoppingItemService.getById(id); 
  }
  
  async edit(productname: string, quantity: string, place: string, unit: string) {
    this.shoppingItemService.edit(productname, quantity, place, unit);
   
  }
  
}
  
