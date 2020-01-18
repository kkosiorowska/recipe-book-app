import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/aut.reducers';

export interface AppState  {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}
