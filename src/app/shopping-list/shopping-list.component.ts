import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import * as fromShoppingList from './store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private slService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }
}
