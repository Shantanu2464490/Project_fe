import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-manager',
  imports: [ NavbarComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

}
