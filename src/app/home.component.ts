import { Component } from "@angular/core";

import { Recipes } from "./recipes.component";
@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [Recipes]
})

export class HomeComponent{

}