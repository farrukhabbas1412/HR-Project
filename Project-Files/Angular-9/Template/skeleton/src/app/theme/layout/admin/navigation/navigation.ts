import {Injectable} from '@angular/core';

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
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'feather icon-align-left',
    children: [
      // {
      //   id: 'sample-page',
      //   title: 'Sample Page',
      //   type: 'item',
      //   url: '/sample-page',
      //   classes: 'nav-item',
      //   icon: 'feather icon-sidebar'
      // },
      {
        id: 'menu-level',
        title: 'My Info',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'menu-level-2.1',
            title: 'Personal',
            type: 'item',
            url: 'users',
            external: true
          }, {
            id: 'menu-level-2.1',
            title: 'Job',
            type: 'item',
            url: 'users',
            external: true
          },
          {
            id: 'menu-level-2.1',
            title: 'Assets',
            type: 'item',
            url: 'javascript:',
            external: true
          }, {
            id: 'menu-level-2.1',
            title: 'Documents',
            type: 'item',
            url: 'javascript:',
            external: true
          }, {
            id: 'menu-level-2.1',
            title: 'Emergency',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'menu-level-2.1',
            title: 'Notes',
            type: 'item',
            url: 'javascript:',
            external: true
          }, {
            id: 'menu-level-2.1',
            title: 'Time Off',
            type: 'item',
            url: 'javascript:',
            external: true
          }, {
            id: 'menu-level-2.1',
            title: 'Benifits',
            type: 'item',
            url: 'javascript:',
            external: true
          }, {
            id: 'menu-level-2.1',
            title: 'Training',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          // {
          //   id: 'menu-level-2.2',
          //   title: 'Menu Level 2.2',
          //   type: 'collapse',
          //   children: [
          //     {
          //       id: 'menu-level-2.2.1',
          //       title: 'Menu Level 2.2.1',
          //       type: 'item',
          //       url: 'javascript:',
          //       external: true
          //     },
          //     {
          //       id: 'menu-level-2.2.2',
          //       title: 'Menu Level 2.2.2',
          //       type: 'item',
          //       url: 'javascript:',
          //       external: true
          //     }
          //   ]
          // }
        ]
      },
      {
        id: 'menu-level',
        title: 'People',
        type: 'collapse',
        icon: 'feather icon-menu'
      }, {
        id: 'menu-level',
        title: 'Hiring',
        type: 'collapse',
        icon: 'feather icon-menu'
      }, {
        id: 'menu-level',
        title: 'Reports',
        type: 'collapse',
        icon: 'feather icon-menu'
      }, {
        id: 'menu-level',
        title: 'Files',
        type: 'collapse',
        icon: 'feather icon-menu'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
