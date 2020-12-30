import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OurBusinessComponent } from './components/our-business/our-business.component';


import { AfterLoginService } from './service/after-login/after-login.service';
import { BeforeLoginService } from './service/before-login/before-login.service';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'our-business',
		component: OurBusinessComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
