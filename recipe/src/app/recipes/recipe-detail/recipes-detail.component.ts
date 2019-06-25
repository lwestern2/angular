import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, 
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
          }
        );
    }
  
  onAddToShoppingList() {
    this.recipeService.addIngredientsToSl(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
