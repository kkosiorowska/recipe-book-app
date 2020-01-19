import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

export  interface FeatureState {
  recipes: State;
}

export  interface  State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
  new Recipe(
    'A test Recipe',
    'This is simple test',
    'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-09-how-to-shrimp-alfredo%2FHT-Shrimp-Alfredo_103',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
  new Recipe(
    'Another Test Recipe',
    'This is simple test',
    'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-09-how-to-shrimp-alfredo%2FHT-Shrimp-Alfredo_103',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Buns', 2)
    ])
]
};
export function recipeReducer(state = initialState, action) {
  return state;
}
