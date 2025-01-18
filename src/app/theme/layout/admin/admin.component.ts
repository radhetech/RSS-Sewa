// angular import
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// project import
import { DattaConfig } from 'src/app/app-config';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { valueSelect } from 'src/app/services/valueSelect.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  navCollapsed: any;
  navCollapsedMob: boolean;
  windowWidth: number;
  showSpecialComponent!:boolean;
  constructor(private router: Router,private location: Location, private _router:Router,private valSel:valueSelect) {
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }

    this.windowWidth = window.innerWidth;
    this.navCollapsed = this.windowWidth >= 992 ? DattaConfig.isCollapseMenu : false;
    this.navCollapsedMob = false;
    
  }
  ngOnInit(): void {
   
 
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Check if the route is 'special', and set the component visibility accordingly
      if (event.url === '/home/dashboard' || event.url === '/home/report' || event.url === '/home/pravaslist' || event.url ==='/home/vahivat' || event.url ==='/login' || event.url === '/home/jillavrut' || event.url === '/home/sevadarshan' || event.url === '/home/tempadmin'  || event.url === '/home/sevadarshan-vrut' || event.url === '/home/manage-user') {
        this.showSpecialComponent = false;
      } else {
        this.showSpecialComponent = true;
      }
    });
  }
  

  navMobClick() {
    if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu() {
    if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
      document.querySelector('app-navigation.pcoded-navbar')?.classList.remove('mob-open');
    }
  }
}
