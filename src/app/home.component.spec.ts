import { HomeComponent } from "./home.component";

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        fixture.autoDetectChanges();
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('modal events are properly handled', async () => {
        // Arrange: Spy on the toggleAddingRecipe method
        spyOn(component, 'toggleAddingRecipe').and.callThrough();
        spyOn(component, 'addInstruction').and.callThrough();

        // Act: Find the button and trigger a click event
        const toggleButtonDe = fixture.debugElement.query(By.css("#add_recipe")); // Find the button
        toggleButtonDe.triggerEventHandler('click', null); // Simulate a click
        fixture.detectChanges(); // Trigger change detection

        // Assert: Verify the method was called
        expect(component.toggleAddingRecipe).toHaveBeenCalled();

        expect(component.addingRecipe).toBeTrue(); 

        let m = fixture.nativeElement as HTMLElement;
        const modal = m.querySelector("#adding_recipe_modal");
        expect(modal).toBeDefined();


        //add an instruction
        const instruction_length_b = component.instructions.length;
        const addingInstructionButtonDe = fixture.debugElement.query(By.css('#add_instruction')); //add instruction button
        addingInstructionButtonDe.triggerEventHandler('click');

        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(component.addInstruction).toHaveBeenCalled();

        m = fixture.nativeElement as HTMLElement;
        const instruction_length_a = component.instructions.length;

        expect(instruction_length_b < instruction_length_a).toBeTrue();

        //Act: Closes the modal
        const toggleButton2De = fixture.debugElement.query(By.css("#cancel_add_recipe")); //find button
        toggleButton2De.triggerEventHandler('click', null); //simulate click 
        fixture.detectChanges();

        expect(component.toggleAddingRecipe).toHaveBeenCalled();
    });

});