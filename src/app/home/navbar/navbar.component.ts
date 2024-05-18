import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(private elementRef: ElementRef) {}

  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  loginService= inject(LoginService);
  _router = inject(Router);
  loginerr:string|null=null;
  selecteduser:boolean = false
 
 

  ngOnInit(): void {
    this.selecteduser= this.loginService.isUserLogin
  }
  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
    
    if (this.menuValue) {
      // Attach click event listener to close menu when clicking outside
      document.addEventListener('scroll', this.closeMenuOutside);
      document.addEventListener('touchstart', this.closeMenuOutside);
    } else {
      // Remove click event listener when closing menu
      document.removeEventListener('click', this.closeMenuOutside);
    }
  }

  closeMenuOutside = (event: any) => {
    // Check if the click event target is not within the menu
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  };

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
    document.removeEventListener('click', this.closeMenuOutside);
  }

   logout(){
     this.loginService.userLogout()
      this.loginerr = 'You have been successfully logged Out!!'
      this.snackTimeOut()
   }
   snackTimeOut() {
    setTimeout(() => {
      this.loginerr = null;
    }, 4000)
  }
}
