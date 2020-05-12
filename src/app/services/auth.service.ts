import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth'
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public activo = false
  constructor(
    public afAuth: AngularFireAuth
  ) { }

  registerUser(email:string, password:string){
    return new Promise((res, rej) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        res(data)
        this.stateUser
      },
      err=>rej(err));
    })
  }

  loginUser(email:string, password:string){
    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(data => {
        res(data)
        this.stateUser
      }, 
      err=>rej(err));
    })
  }

  stateUser(){
    return this.afAuth.authState
    /*this.afAuth.authState.subscribe(auth =>{
      if(auth){
        return this.activo = !this.activo
      }
    })*/
  }

  logout(){
    return this.afAuth.auth.signOut()
  }
}
