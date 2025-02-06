import { CommonModule } from "@angular/common";
import { Component, Input, signal } from "@angular/core";
import { recipe } from "./recipe";

@Component({
    selector: "recipe",
    templateUrl: "./recipe.component.html",
    styleUrl: "./recipe.component.css",
    imports: [CommonModule]
})

export class Recipe{
    @Input('recipe') recipe!:recipe;
}