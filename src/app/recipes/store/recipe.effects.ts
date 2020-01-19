import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import * as RecipeActions from '../store/recipe.actions';
import {Recipe} from '../recipe.model';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>('https://ng-recipe-book-37167.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      });
    }),
    map(
      (recipes) => {
        console.log(recipes);
        for (const recipe of recipes) {
          if (!recipe.ingredients) {
            recipe.ingredients = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    ));

  constructor(private actions$: Actions,
              private httpClient: HttpClient) {}
}
