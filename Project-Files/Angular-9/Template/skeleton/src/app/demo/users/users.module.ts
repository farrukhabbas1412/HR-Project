import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {SafeHtmlPipe} from './safe-html.pipe';

@NgModule({
  declarations: [SafeHtmlPipe],
  exports: [
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
