// angular import
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule,RouterLink,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent implements OnInit {
  ngOnInit() {

      let temp = JSON.parse(localStorage.getItem('loggedInUser'))
      let userRole = temp.authorities[0];
      if(userRole=='taluka'){
        this.navList =  this.navList.filter((item:any)=>{
           return item.title!='જિલ્લા વૃત'&& item.title!='અહેવાલ'
        })
      } else if(userRole=='jilla'){
   
        this.navList =  this.navList.filter((item:any)=>{
          return  item.title=='જિલ્લા વૃત' || item.title=='અહેવાલ'
       })
      }
     

  }

  navList = [
    {
      title: 'શાખા વૃત્ત',
      description: ' (સેવા દિવસ ગુરૂવાર નું વૃત્ત માટે)',
      design: 'col-md-3',
      link:'/home/shakhavrut',
      img:'../../../assets/images/Vrut.webp',
      cardClass:'dashboard-card',
      headerClass:'dashboard-card-header',
      blockClass:'dashboard-card-block',
    },
    {
      title: 'સેવા ઉપક્રમ',
      description: '(સેવા ઉપક્રમની વિગતો ભરવા માટે)',
      design: 'col-md-3',
      link:'/home/sevaupkram',
       img:'../../../assets/images/Shikshan1.webp',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    {
      title: 'સેવા કાર્ય',
      description: '(સેવા કાર્યની વિગતો ભરવા માટે)',
      design: 'col-md-3',
      link:'/home/sevakary',
       img:'../../../assets/images/Sevabharati.jpeg',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    {
      title: 'ઉત્સવ વૃત',
      description: '(ઉત્સવનું વૃત્ત આપવા માટે)',
      design: 'col-md-3',
      link:'/home/utsavvrut',
       img:'../../../assets/images/utsav.jpeg',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    {
      title: 'સેવા દર્શન',
      description: '(સેવા દર્શનની વિગતો ભરવા માટે)',
      design: 'col-md-3',
      link:'/home/sevadarshan',
       img:'../../../assets/images/sevadarshan.jpeg',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    {
      title: 'જિલ્લા વૃત',
      description: '(જિલ્લા વૃત માટે)',
      design: 'col-md-3',
      link:'/home/jillavrut',
       img:'../../../assets/images/Vrut.webp',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    {
      title: 'વહીવટી',
      description: '(વહીવટી કામ માટે)',
      design: 'col-md-3',
      link:'/home/vahivat',
       img:'../../../assets/images/profile.avif',
       cardClass:'dashboard-card',
       headerClass:'panel-header',
       blockClass:'dashboard-card-block',
    },
    {
      title: 'અહેવાલ',
      description: '(માસિક અને વાર્ષિક અહેવાલ)',
      design: 'col-md-3',
      link:'/home/report',
       img:'../../../assets/images/Vrut.webp',
       cardClass:'dashboard-card',
       headerClass:'panel-header',
       blockClass:'dashboard-card-block',
    }
  ];
}
