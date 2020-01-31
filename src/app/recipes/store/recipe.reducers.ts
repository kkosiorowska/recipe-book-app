import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export  interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export  interface  State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
  new Recipe(
    'Sweet pancakes',
    'Easy Fluffy Pancakes',
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    [
      new Ingredient('Egg', 1),
      new Ingredient('Strawberry', 10),
      new Ingredient('Blueberry', 5)
    ]),
  new Recipe(
    'Beef burger',
    'The Best Classic Burger Recipe',
    'https://images.pexels.com/photos/1563045/pexels-photo-1563045.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Buns', 2),
      new Ingredient('Onion', 1)
    ]),
    new Recipe(
      ' Delicious Sandwich',
      'Quick Sandwich Recipe',
      'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      [
        new Ingredient('Avocado', 1),
        new Ingredient('Egg', 2),
        new Ingredient('Bread', 1)
      ]),
    new Recipe(
      'Tomato Soup',
      'Classic Tomato Soup Recipe',
      'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      [
        new Ingredient('Tomato', 5),
        new Ingredient('Carrot', 3)
      ]),
    new Recipe(
      'Green Pasta',
      'Pesto Pasta Recipe',
      'https://images.pexels.com/photos/2090921/pexels-photo-2090921.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [
        new Ingredient('Basil', 1),
        new Ingredient('Pasta', 1),
        new Ingredient('Garlic', 1)
      ])
]
};
export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes
      };
    case RecipeActions.DELETE_RECIPE:
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
