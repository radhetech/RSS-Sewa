// angular import
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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
  constructor(private apiService:ApiService){

  }
  ngOnInit(): void {

      let temp = this.apiService.getUserData();
      let userRole = temp.authorities[0];
      if(userRole=='SDARSHAN'){
        this.navList =  this.navList.filter((item:any)=>{
           return item.id=='sevadarshan' || item.id=='pravas-list';
        })
      }else if(userRole=='TALUKA'){
        this.navList =  this.navList.filter((item:any)=>{
           return  item.id=='shakhavrut' || item.id=='upkram'|| item.id=='upkram'|| item.id=='sevakarya' || item.id=='vahivat' || item.id=='utsav';
        })
      } else if(userRole=='JILLA'){
   
        this.navList =  this.navList.filter((item:any)=>{
         return  item.id=='jilla' || item.id=='aheval' || item.id=='tempadmin'|| item.id=='pravas-list';
       })
      } else if(userRole=='ADMIN' || userRole=='PRANT'){
           this.navList = this.navList;
      } else{
       this.navList = [];
      }
     

  }

  navList = [
    {
      id: 'shakhavrut',
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
      id: 'upkram',
      title: 'સેવા ઉપક્રમ',
      description: '(સેવા ઉપક્રમની વિગતો ભરવા માટે)',
      design: 'col-md-3',
      link:'/home/sevaupkram',
       img:'../../../assets/images/Shikshan1.webp',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    { id: 'sevakarya',
      title: 'સેવા કાર્ય',
      description: '(સેવા કાર્યની વિગતો ભરવા માટે)',
      design: 'col-md-3',
      link:'/home/sevakary',
       img:'../../../assets/images/sevabharti-circle.png',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    { id: 'utsav',
      title: 'ઉત્સવ વૃત',
      description: '(ઉત્સવનું વૃત્ત આપવા માટે)',
      design: 'col-md-3',
      link:'/home/utsavvrut',
       img:'../../../assets/images/utsav.jpeg',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    { id: 'sevadarshan',
      title: 'સેવા દર્શન',
      description: '(સેવા દર્શનની વિગતો ભરવા માટે)',
      design: 'col-md-3',
      link:'/home/sevadarshan',
       img:'../../../assets/images/sevadarshan.jpeg',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    { id: 'pravas-list',
      title: 'સેવા દર્શન પ્રવાસ યાદી ',
      description: '',
      design: 'col-md-3',
      link:'/home/pravaslist',
       img:'../../../assets/images/sevadarshan.jpeg',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    { id: 'jilla',
      title: 'જિલ્લા વૃત',
      description: '(જિલ્લા વૃત માટે)',
      design: 'col-md-3',
      link:'/home/jillavrut',
      img:'../../../assets/images/Vrut.webp',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
    { id: 'vahivat',
      title: 'વહીવટી',
      description: '(વહીવટી કામ માટે)',
      design: 'col-md-3',
      link:'/home/vahivat',
       img:'../../../assets/images/profile.avif',
       cardClass:'dashboard-card',
       headerClass:'panel-header',
       blockClass:'dashboard-card-block',
    },
    { id: 'aheval',
      title: 'અહેવાલ',
      description: '(માસિક અને વાર્ષિક અહેવાલ)',
      design: 'col-md-3',
      link:'/home/report',
      img:'../../../assets/images/Vrut.webp',
       cardClass:'dashboard-card',
       headerClass:'panel-header',
       blockClass:'dashboard-card-block',
    },
    { id: 'tempadmin',
      title: 'સેવા દર્શન કરવા જનાર માટે',
      description: '',
      design: 'col-md-3',
      link:'/home/tempadmin',
       img:'../../../assets/images/Shikshan1.webp',
       cardClass:'dashboard-card',
       headerClass:'dashboard-card-header',
       blockClass:'dashboard-card-block',
    },
  ];
}
