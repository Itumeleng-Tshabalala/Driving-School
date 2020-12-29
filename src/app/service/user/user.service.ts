import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Server } from "../../interface/models";

import { Observable, BehaviorSubject, Subject } from 'rxjs';

// Service
import { TokenService } from '../token/token.service';

import { IUser } from '../../interface/imodels';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	name: string;
	server= new Server;

	constructor(
		private http: HttpClient,
		private tokenServ: TokenService
	) { }

	setName(data) : void{
		this.name = data.user.name;
	}

	getName() {
		return this.name;
	}
}
