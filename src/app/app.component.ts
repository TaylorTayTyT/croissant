import { Component } from '@angular/core';
import { Route, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
