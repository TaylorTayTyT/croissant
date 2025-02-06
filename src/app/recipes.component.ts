import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { recipe } from "./recipe";

let a : recipe = {
    title: "sample title",
    author: "sample author"
}
@Component({
    selector: "recipe-component",
    templateUrl: "./recipes.component.html",
    styleUrl: "./recipes.component.css",
    imports: [CommonModule]
})
export class Recipes{
    recipes = [a];
    test = signal("balh");

    addToRecipes(recipe: recipe){
        this.recipes.push(recipe);
    };
    
}