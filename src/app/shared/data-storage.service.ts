import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // const headers =  new HttpHeaders().set('Authorization',  'xxzxcxcxcxcxc');

    return this.http.put('https://ng-recipe-book-37167.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      observe: 'body',
      params: new HttpParams().set('auth', token)
      // headers: headers
    });
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get<Recipe[]>('https://ng-recipe-book-37167.firebaseio.com/recipes.json?auth=' + token)
      .pipe(map((recipes) => {
            for (const recipe of recipes) {
              if (!recipe.ingredients) {
                console.log(recipe);
                recipe.ingredients = [];
              }
            }
            return recipes;
          }
        ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
