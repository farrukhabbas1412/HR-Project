import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbCarouselModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {LightboxModule} from 'ngx-lightbox';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [UserProfileComponent],
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        SharedModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbCarouselModule,
        LightboxModule,
        MatIconModule
    ]
})
export class UserProfileModule { }
