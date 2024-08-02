import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(private elementRef: ElementRef, private router: Router, private AuthenticationService:AuthenticationService) {
    this.loggedInUser = this.AuthenticationService.loggedInUserData;
   this.AuthenticationService.isUserLoginSub.asObservable().subscribe((val)=> {
    this.authUser = true;
    this.loggedInUser = val;
   });
  }

  menuValue: boolean = false;
  menu_icon: string = 'bi bi-list';
  loginerr: string | null = null;
  loggedInUser:any;
  menuListenersAttached: boolean = false;
  authUser:boolean = false;

  ngOnInit() {
   if(localStorage.getItem('loggedInUser')) { 
    this.authUser = true;
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')!);
   }
  }
  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';

    if (this.menuValue) {
      if (!this.menuListenersAttached) {
        document.addEventListener('click', this.closeMenuOutside);
        document.addEventListener('scroll', this.closeMenuOutside);
        document.addEventListener('touchstart', this.closeMenuOutside);
        this.menuListenersAttached = true;
      }
    } else {
      this.removeEventListeners();
    }
  }

  closeMenuOutside = (event: Event) => {
    const target = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.closeMenu();
    }
  };

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
    this.removeEventListeners();
    this.menuListenersAttached = false;
  }

  private removeEventListeners() {
    document.removeEventListener('click', this.closeMenuOutside);
    document.removeEventListener('scroll', this.closeMenuOutside);
    document.removeEventListener('touchstart', this.closeMenuOutside);
  }
  navigateAndClose(route: string) {
    this.router.navigateByUrl(route);
    this.closeMenu();
  }

  logout() {
    this.authUser = false;
    this.AuthenticationService.userLogout();
    this.loginerr = 'You have been successfully logged Out!!';
    this.snackTimeOut();
  }
  snackTimeOut() {
    setTimeout(() => {
      this.loginerr = null;
    }, 4000);
  }
}
