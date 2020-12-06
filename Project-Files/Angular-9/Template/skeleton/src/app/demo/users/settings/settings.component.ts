import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SettingsComponent implements OnInit {
  text: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  value() {
    console.log(this.text)
    localStorage.setItem('bannerData', this.text)
  }
}
