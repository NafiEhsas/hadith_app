import { Component,signal } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";
@Component({
imports: [
    DashboardComponent
],
selector:'app-root',
providers:[]
,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hadith';
 
}
