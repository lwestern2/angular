import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
