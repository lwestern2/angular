import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable ({
    providedIn: 'root'
})

export class RecipeService { //step 1
    recipeSelected = new EventEmitter<Recipe>(); //step 2

    private recipes: Recipe[] = [
        new Recipe('Tasy Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger', 'What else do you need to say?', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() { //step 1
        return this.recipes.slice();
    }

    addIngredientsToSl(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}