import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/choose-service',
    pathMatch: 'full',
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  // },
  {
    path: 'choose-service',
    loadChildren: () => import('./choose-service/choose-service.module').then( m => m.ChooseLanguagePageModule)
  },
  {
    path: 'enquiry',
    loadChildren: () => import('./enquiry/enquiry.module').then( m => m.EnquiryPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
