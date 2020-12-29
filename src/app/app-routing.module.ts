import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


import { AfterLoginService } from './service/after-login/after-login.service';
import { BeforeLoginService } from './service/before-login/before-login.service';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
