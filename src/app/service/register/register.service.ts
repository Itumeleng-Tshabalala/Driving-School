import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Server } from "../../interface/models";

import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  	server = new Server;

	constructor(
		private http: HttpClient,
	) { }

	register(credentials){
		return this.http.post(this.server.baseUrl + '/register', credentials);
	}
}
