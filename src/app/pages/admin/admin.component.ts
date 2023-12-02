import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
    location: Location;

    constructor(location: Location) {
        this.location = location;
        
        this.location.replaceState("admin/index.html");
    }
}
