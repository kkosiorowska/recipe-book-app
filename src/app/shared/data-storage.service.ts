import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-37167.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get<Recipe[]>('https://ng-recipe-book-37167.firebaseio.com/recipes.json')
      .pipe(map((response: Recipe[]) => {
            for (const recipe of response) {
              if (!recipe.ingredients) {
                console.log(recipe);
                recipe.ingredients = [];
              }
            }
            return response;
          }
        ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
