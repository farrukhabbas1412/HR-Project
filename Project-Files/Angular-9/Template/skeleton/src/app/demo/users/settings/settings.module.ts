import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {CardModule} from "../../../../../../full-version/src/app/theme/shared/components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsersModule} from "../users.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    UsersModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class SettingsModule { }
