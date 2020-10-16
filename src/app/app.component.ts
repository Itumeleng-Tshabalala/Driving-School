import { Component, OnInit } from '@angular/core';

// Services
import { LoginService } from "./service/login/login.service";
import { TokenService } from './service/token/token.service';
import { UserService } from "./service/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '@YourService';
	
	userName: string;
	constructor(
		private loginServ: LoginService,
		private tokenServ: TokenService,
		private userServ: UserService,
	) { }

	ngOnInit(): void {
		this.loginServ.authStatus.subscribe(
			logged => {
				
				if(logged){
					this.userName = this.userServ.getName();
				}
			}
		);
	}
}
