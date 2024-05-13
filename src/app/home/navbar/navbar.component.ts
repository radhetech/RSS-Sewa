import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  loginService= inject(LoginService);
  _router = inject(Router);
  loginerr:string|null=null;
  selecteduser:boolean = false
 
 

  ngOnInit(): void {
    this.selecteduser= this.loginService.isUserLogin
  }
  openMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
   }
    closeMenu() {
     this.menuValue = false;
     this.menu_icon = 'bi bi-list';
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
