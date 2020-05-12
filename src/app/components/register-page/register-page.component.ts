import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public email:string 
  public password:string
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashmsg: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  addUser(){
    this.authService.registerUser(this.email, this.password)
    .then(res => {
      this.flashmsg.show('Usuario creado Correctamente.',{cssClass: 'alert-success', timeout: 3000})
      this.router.navigate(['/private'])
    }).catch(err => this.flashmsg.show('Debe llenar los campos correspondientes',{cssClass: 'alert-danger', timeout: 3000}))
  }
}
