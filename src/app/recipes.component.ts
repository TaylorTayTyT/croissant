import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
    selector: "recipe-component",
    templateUrl: "./recipes.component.html",
    styleUrl: "./recipes.component.css",
    imports: [CommonModule]
})

export class Recipes{
    recipes = ['Pasta', 'Pizza', 'Burger'];
    test = signal("balh")
}