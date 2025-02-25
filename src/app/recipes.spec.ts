import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Recipes } from "./recipes.component";

describe("Recipes rendering test", () => {
    let fixture: ComponentFixture<Recipes>;
    let component: Recipes;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Recipes], // Recipes should be declared, not imported
        }).compileComponents();

        fixture = TestBed.createComponent(Recipes);
        component = fixture.componentInstance;
        fixture.detectChanges(); // Ensure changes are detected
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });
});
