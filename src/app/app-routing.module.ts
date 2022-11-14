import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageWrapperComponent } from './components/landing-page-wrapper/landing-page-wrapper.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DeveloperDataResolver } from './resolvers/developer-data.resolver';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: ':developer',
    component: LandingPageWrapperComponent,
    resolve: {
      data: DeveloperDataResolver,
    },
 },
  {
    path: ':developer/',
    component: LandingPageWrapperComponent,
    resolve: {
      data: DeveloperDataResolver,
    },
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
