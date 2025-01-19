import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home/home.component";
@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
