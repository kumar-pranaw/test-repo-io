import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isSmallScreen = false;
  sidenavOpen = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 767px)']).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
  toSpeakers() {
    const element = document.getElementById("speakers");
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  }

  toRegister() {

  }

  toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
  }
  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
