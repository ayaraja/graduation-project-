import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	email: string = ""
	password: string = ""
	activities:string=""
	constructor(public afAuth: AngularFireAuth, public user: UserService, public router: Router) { }

	ngOnInit() {
	}

	async login() {
		const { email, password,activities } = this
		try {
			// kind of a hack. 
			const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
			
			if(res.user) {
				this.user.setUser({
					email,
					uid: res.user.uid,
					activities,
					password,
				})
				this.router.navigate(['/homepage'])
			}
		
		} catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
				console.log("المستخدم غير موجود")
			}
		}
	}

}
