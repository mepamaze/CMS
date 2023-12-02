import { Component } from '@angular/core';
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms3';

  constructor(private location: Location){
    
    this.location.replaceState(this.location.path() + "/index.html");
  }
}
