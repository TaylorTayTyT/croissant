import { Component, ViewChild, ElementRef, ChangeDetectorRef } from "@angular/core";

import { Recipes } from "./recipes.component";
import { CommonModule } from "@angular/common";
@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [Recipes, CommonModule]
})

export class HomeComponent{
    constructor(private cdr: ChangeDetectorRef){}
    addingRecipe = false; 
    instructions : number[] = []
    toggleAddingRecipe(e: MouseEvent){
        this.addingRecipe = !this.addingRecipe;
        document.getElementById("adding_recipe_modal")?.classList.toggle("disabled");
        this.cdr.detectChanges(); 
    }
    addInstruction(e: MouseEvent){
        this.instructions.push(1); 
        this.cdr.detectChanges(); 
    }
    deleteInstruction(i: number){
        this.instructions.splice(i, 1);
    }

}