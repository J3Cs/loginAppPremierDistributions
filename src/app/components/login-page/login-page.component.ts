import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email:string
  public password: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashmsg: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.authService.loginUser(this.email, this.password)
    .then(res => {
      this.flashmsg.show('Bienvenido '+this.email,{cssClass: 'alert-success', timeout: 4000})
      this.router.navigate(['/private'])
    }).catch(err => this.router.navigate['/login'])
  }
}
