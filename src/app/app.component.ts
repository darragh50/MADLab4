import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';

@Component
(
  {
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}
)

export class AppComponent 
{
  title = 'data-binding-app';

onSave()
{
  alert("Button Clicked!");
}


   count: number = 0; 
   clickCount(): void
   {
        this.count++
   }

   hide:boolean = true;
   imageClicked()
   {
    this.hide=!this.hide;
   }
}