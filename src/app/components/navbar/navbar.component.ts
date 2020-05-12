import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogged: boolean
  public userName: string
  public email: string
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashmsg: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.authService.stateUser().subscribe(auth => {
      if(auth){
        this.isLogged = true
      }else{
        this.isLogged = false
      }
    })
  }

  logOut(){
    this.flashmsg.show('Sesion Cerrada Correctamente.',{cssClass: 'alert-success', timeout: 3000})
    this.authService.logout()
    this.router.navigate(['/'])
  }
}
