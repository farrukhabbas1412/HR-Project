import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user-profile/user-profile.module').then(module => module.UserProfileModule)
  }, {
    path: 'horizontal',
    loadChildren: () => import('./theme-horizontal/theme-horizontal.module').then(module => module.ThemeHorizontalModule)
  }, {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(module => module.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
