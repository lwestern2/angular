import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { } //recipe-service step 2

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe( //recipe-event step 2
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
