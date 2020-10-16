import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Server } from "../../interface/models";

import { Observable, BehaviorSubject, Subject } from 'rxjs';

// Service
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	server = new Server;
	private loggedIn = new BehaviorSubject<boolean>(this.tokenServ.isLoggedIn());

	authStatus = this.loggedIn.asObservable();
	
	constructor(
		private http: HttpClient,
		private tokenServ: TokenService
		) { }

	login(credentials){
		return this.http.post(this.server.baseUrl + '/login', credentials);
	}

	changeAuthStatus(value: boolean){
		this.loggedIn.next(value);
	}
 
}