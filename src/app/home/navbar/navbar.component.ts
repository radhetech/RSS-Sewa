import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(private elementRef: ElementRef, private router: Router) {}

  menuValue: boolean = false;
  menu_icon: string = 'bi bi-list';
  loginService = inject(LoginService);
  _router = inject(Router);
  loginerr: string | null = null;
  selecteduser: boolean = false;
  menuListenersAttached: boolean = false;

  ngOnInit(): void {
    this.selecteduser = this.loginService.isUserLogin;
  }
  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';

    if (this.menuValue) {
      // Check if event listeners are already attached
      if (!this.menuListenersAttached) {
        // Attach event listeners when menu is opened
        document.addEventListener('click', this.closeMenuOutside);
        document.addEventListener('scroll', this.closeMenuOutside);
        document.addEventListener('touchstart', this.closeMenuOutside);
        // Set flag to indicate event listeners are attached
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
    this.loginService.userLogout();
    this.loginerr = 'You have been successfully logged Out!!';
    this.snackTimeOut();
  }
  snackTimeOut() {
    setTimeout(() => {
      this.loginerr = null;
    }, 4000);
  }
}
