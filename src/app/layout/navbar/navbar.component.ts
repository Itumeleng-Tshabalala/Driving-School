import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { LoginService } from "../../service/login/login.service";
import { TokenService } from '../../service/token/token.service';
import { UserService } from "../../service/user/user.service";

import { User } from "../../interface/models";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	@Input() userName: string;
	isLoggedIn : boolean;

	constructor(
		private loginServ: LoginService,
		private tokenServ: TokenService,
		private userServ: UserService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.loginServ.authStatus.subscribe(
			logged => {
				this.isLoggedIn = logged;
				this.userName = this.userServ.getName();
			}
		);
	}

	
	logout(){
		this.loginServ.changeAuthStatus(false);
		this.tokenServ.removeToken();
		this.router.navigateByUrl('/our-prices');
	}

}
