import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Server } from 'src/app/interface/models';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

	payLoad;
	server = new Server;

	private iss = {
		login: 'http://localhost:8000/api/login',
		signUp: 'http://localhost:8000/api/register',
	};

	constructor(
		private http: HttpClient,
	) { }


	handleToken(token){
		this.setToken(token);
	}

	setToken(token){
		localStorage.setItem('token', token);
	}

	getToken(){
		return localStorage.getItem('token');
	}

	removeToken(){
		return localStorage.removeItem('token');
	} 

	isValid(){
		const token = this.getToken();
		if(token){
			this.payLoad = this.getPayLoad(token);
			if(this.payLoad){
				return Object.values(this.iss).indexOf(this.payLoad.iss) > -1 ? true : false	
			}
		}

		return false;
	}

	getPayLoad(token){
		
		this.payLoad = this.getField(token, 2, '.');
		return this.decodePayLoad(this.payLoad);
	}

	decodePayLoad(payLoad){
		return JSON.parse(atob(this.payLoad));
	}

	getField(line, index, delim)
	{
		let returnline = "";
		line += delim;
		for(let i = 1; i <= index; i++)
		{
			let pos = line.indexOf(delim);
			returnline = line.slice(0, line.indexOf(delim));
			line = line.slice(line.indexOf(delim) + 1);
		}
		return returnline;
	}

	isLoggedIn(){
		return this.isValid();
	}
}
