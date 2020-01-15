import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(private slService: ShoppingListService, private store: Store<{shoppinglist: {ingredients: Ingredient[]}}>) { }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppinglist');
    // this.subscription = this.slService.ingredientsChanged
      // .subscribe(
      //   (ingredients: Ingredient[]) => {
      //     this.ingredients = ingredients;
      //   }
      // );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
