import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeHorizontalRoutingModule } from './theme-horizontal-routing.module';
import { ThemeHorizontalComponent } from './theme-horizontal.component';
import {CardModule} from "../../../theme/shared/components";
import {CommonContentModule} from "../../../../../../full-version/src/app/demo/pages/layout/common-content/common-content.module";
// import {SharedModule} from '../../../../theme/shared/shared.module';
// import {CommonContentModule} from '../common-content/common-content.module';

@NgModule({
  declarations: [ThemeHorizontalComponent],
  imports: [
    CommonModule,
    ThemeHorizontalRoutingModule,
    CardModule,
    CommonContentModule,
    // SharedModule,
    // CommonContentModule
  ]
})
export class ThemeHorizontalModule { }
