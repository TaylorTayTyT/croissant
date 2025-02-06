import { Component, ViewChild, ElementRef, ChangeDetectorRef } from "@angular/core";

import { Recipes } from "./recipes.component";
@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [Recipes]
})

export class HomeComponent{
    constructor(private cdr: ChangeDetectorRef){}
    addingRecipe = false; 
    toggleAddingRecipe(e: MouseEvent){
        this.addingRecipe = !this.addingRecipe;
        document.getElementById("adding_recipe_modal")?.classList.toggle("disabled");
    }
    addInstruction(e: MouseEvent){
        const parent = document.getElementById("adding_recipe_modal");
        const element = document.createElement("div");
        element.classList.add("instruction");
        const t1 = document.createElement("textarea");
        const t2 = document.createElement("textarea");
        element.appendChild(t1)
        element.appendChild(t2)
        parent?.appendChild(element)
        this.cdr.markForCheck(); 
    }
}