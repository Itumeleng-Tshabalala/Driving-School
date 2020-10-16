import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

// Services
import { LoginService } from "../../service/login/login.service";
import { TokenService } from '../../service/token/token.service';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	error;
	@ViewChild('closebutton') closebutton;

	form = new FormGroup  ({
		email : new FormControl(''),
		password: new FormControl('')
	});

	constructor(
		private loginServ: LoginService,
		private tokenServ: TokenService,
		private userServ: UserService,
		private router: Router
	) { }

	ngOnInit(): void {

	}

	onSubmit(){
		this.loginServ.login(this.form.value).subscribe(
			
			data => {
				this.userServ.setName(data);
				this.HandleResponse(data);
				this.closebutton.nativeElement.click();
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
