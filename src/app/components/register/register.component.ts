import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

// Services
import { LoginService } from "../../service/login/login.service";
import { TokenService } from '../../service/token/token.service';
import { RegisterService } from './../../service/register/register.service';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	error;
	@ViewChild('btnClose') btnClose;

	registerForm = new FormGroup  ({
		name : new FormControl(''),
		surname : new FormControl(''),
		id : new FormControl(''),
		phone_number : new FormControl(''),
		email : new FormControl(''),
		password: new FormControl(''),
		password_confirmation: new FormControl(''),
	});
	
	constructor(
		private loginServ: LoginService,
		private tokenServ: TokenService,
		private registerServ: RegisterService,
		private userServ: UserService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	register(){
		this.registerServ.register(this.registerForm.value).subscribe(

			data => {
				this.userServ.setName(data);
				this.HandleResponse(data);
				this.btnClose.nativeElement.click();
			},
			error => {
				this.handlerError(error);
			}
		);
	}

	handlerError(error){
		this.error = error.error.error
	}

	HandleResponse(data){
		this.tokenServ.handleToken(data.access_token);
		this.loginServ.changeAuthStatus(true);
		this.router.navigateByUrl('/our-prices');
	}

}
