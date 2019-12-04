import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public isLogged: any =false;

  constructor(public afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe( user => (this.isLogged = user));
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  //login

  async onLogin(user:User){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(
        user.email, 
        user.password
      );
    } catch (error){
      console.log('error on login', error);
    }
  }

  //register

  async onRegister(user:User){
    try{
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    } catch (error){
      console.log('error on register', error);
    }
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
}
