import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NextConfig} from '../../../../app-config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class NavBarComponent implements OnInit {
  public nextConfig: any;
  public menuClass: boolean;
  public collapseStyle: string;
  public windowWidth: number;

  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavHeaderMobCollapse = new EventEmitter();
  text: any;

  constructor() {
    this.nextConfig = NextConfig.config;
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {
    this.text = localStorage.getItem('bannerData')
    if (this.text === "undefined") {
      this.text = false;
    }
  }

  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = (this.menuClass) ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.onNavCollapse.emit();
    } else {
      this.onNavHeaderMobCollapse.emit();
    }
  }

}
