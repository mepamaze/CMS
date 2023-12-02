import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
    location: Location;

    constructor(location: Location){
        this.location = location;
        
        this.location.replaceState("test/index.html");
    }

}
