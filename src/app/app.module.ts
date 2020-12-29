import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { bootstrap } from "bootstrap";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './components/register/register.component';


@NgModule({
    declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		HomeComponent,
		LoginComponent,
		RegisterComponent,
    ],
    imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
