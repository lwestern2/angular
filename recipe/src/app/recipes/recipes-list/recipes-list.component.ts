import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A test Recipe', 'This is simply a test', 'img'),
  new Recipe('A test Recipe', 'This is simply a test', 'img')
]

  constructor() { }

  ngOnInit() {
  }

}
