// angular import
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';

// project import
import { NavigationItem } from '../navigation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements OnInit{
  // public props
  title = 'Demo application for version numbering';
  currentApplicationVersion = environment.appVersion;
  @Output() onNavCollapsedMob = new EventEmitter();
  navigation: any;
  windowWidth: number;
  userRole:any;
  userData:any;
  // constructor
  constructor(
    public nav: NavigationItem,
    private location: Location
  ) {
    this.windowWidth = window.innerWidth;
    this.navigation = this.nav.get();
  }
  ngOnInit(): void {

    console.log(this.nav.get())
      this.userData= JSON.parse(localStorage.getItem('loggedInUser'))
      this.userRole = this.userData.authorities[0];
      if(this.userRole=='taluka'){
        this.navigation[0].children =  this.navigation[0].children.filter((item:any)=>{
           return item.id!='jilla'&& item.id!='aheval'
        })
      } else if(this.userRole=='jilla'){
   
        this.navigation[0].children =  this.navigation[0].children.filter((item:any)=>{
          return  item.id=='jilla' || item.id=='aheval'
       })
      }
     

  }

  // public method
  navMob() {
    if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
      this.onNavCollapsedMob.emit();
    }
  }

  fireOutClick() {
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent.parentElement.parentElement;
      const last_parent = up_parent.parentElement;
      if (parent.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger');
        parent.classList.add('active');
      } else if (up_parent.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger');
        last_parent.classList.add('active');
      }
    }
  }
}
