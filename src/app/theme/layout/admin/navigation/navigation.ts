import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: '',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'મુખપૃષ્ઠ',
        type: 'item',
        url: '/home/dashboard',
        icon: 'feather icon-home',
        classes: 'nav-item'
      },
      {
        id: 'shakhavrut',
        title: 'શાખા વૃત્ત',
        type: 'item',
        url: '/home/shakhavrut',
        icon: 'feather icon-airplay',
        classes: 'nav-item'
      },
      {
        id: 'upkram',
        title: 'સેવા ઉપક્રમ',
        type: 'item',
        url: '/home/sevaupkram',
        icon: 'feather icon-edit',
        classes: 'nav-item'
      },
      {
        id: 'sevakarya',
        title: 'સેવા કાર્ય',
        type: 'item',
        url: '/home/sevakary',
        icon: 'feather icon-book',
        classes: 'nav-item'
      },
      {
        id: 'sevadarshan',
        title: 'સેવા દર્શન',
        type: 'item',
        url: '/home/sevadarshan',
        icon: 'feather icon-book',
        classes: 'nav-item'
      },
      {
        id: 'tempadmin',
        title: 'જીલ્લા એડમીન ',
        type: 'item',
        url: '/home/tempadmin',
        icon: 'feather icon-book',
        classes: 'nav-item'
      },
      {
        id: 'pravas-list',
        title: 'પ્રવાસ યાદી ',
        type: 'item',
        url: '/home/pravaslist',
        icon: 'feather icon-book',
        classes: 'nav-item'
      },
      {
        id: 'utsav',
        title: 'ઉત્સવ વૃત',
        type: 'item',
        url: '/home/utsavvrut',
        icon: 'feather icon-plus-circle',
        classes: 'nav-item'
      },
      {
        id: 'jilla',
        title: 'જિલ્લા વૃત',
        type: 'item',
        url: '/home/jillavrut',
        icon: 'feather icon-calendar',
        classes: 'nav-item'
      },
      {
        id: 'vahivat',
        title: 'એડમિન',
        type: 'item',
        url: '/home/vahivat',
        icon: 'feather icon-briefcase',
        classes: 'nav-item'
      },
      {
        id: 'aheval',
        title: 'અહેવાલ',
        type: 'item',
        url: '/home/report',
        icon: 'feather icon-bar-chart',
        classes: 'nav-item'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
