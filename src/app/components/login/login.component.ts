import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { GlobalVariables } from 'src/app/global/variables';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/http/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin() : void{
    this.loginService.authenticateUser(this.loginForm.value.username, this.loginForm.value.password).subscribe(data => {
      alert("Authenticated!");
    }, error => {
      alert("Login Failed. Please check your credentials");
    });
  }

}
