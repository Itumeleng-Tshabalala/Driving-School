import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { PricesComponent } from "./components/prices/prices.component";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

import { AfterLoginService } from './service/after-login/after-login.service';
import { BeforeLoginService } from './service/before-login/before-login.service';


const routes: Routes = [
  	{
		  path: 'our-prices', 
		  component: PricesComponent,
		//   canActivate: [BeforeLoginService]
	},
	{
		path: 'contact-us', 
		component: ContactUsComponent,
		// canActivate: [BeforeLoginService]
	},
	{
		path: 'our-services', 
		component: OurServicesComponent,
		// canActivate: [BeforeLoginService, AfterLoginService]
	  },
	  {
		path: 'about-us', 
		component: AboutUsComponent,
		// canActivate: [BeforeLoginService]
  	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
