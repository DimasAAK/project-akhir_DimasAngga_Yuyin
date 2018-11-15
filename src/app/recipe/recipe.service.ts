import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe ('Pecel', 'Nasi Pecel merupakan salah satu makanan khas dari Madiun. Harga yang murah dengan cita rasa yang lezat membuat para penikmatnya ketagihan.','../src/app/img/pecel.jpg',[
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Recipe ('Bakso Malang','Bakso Malang merupakan salah satu makanan khas yang ada diMalang. Bakso Malang mempunyai cita rasa yang khas berbeda dengan bakso lainnya.','../src/app/img/baso-malang.jpg',[
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

constructor(private slsService: ShoppingListService) { }

} 
