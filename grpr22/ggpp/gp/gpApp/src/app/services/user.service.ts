import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'


interface user {
	email:string,
	uid: string,
	activities:string,
	password: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: user
private uid;
private activities;
	constructor(private afAuth: AngularFireAuth) {

	}

	setUser(user: user) {
		this.user = user
	}
	setUseractivities():string {
		 return this.user.activities
	}
	// getUsername(): string {
	// 	return this.user.username
	// }

		getUseremail(): string {
		return this.user.email
	}


	getUseractivities():string{
		return this.user.activities;
	}

	reAuth(email: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(email , password))
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail )
	}

	async isAuthenticated() {
		if(this.user) return true

		const user = await this.afAuth.authState.pipe(first()).toPromise()

		if(user) {
			this.setUser({
				email: user.email.split('@')[0],
				uid: user.uid,
				activities:"",
				password:"",
			
			})

			return true
		}
		return false
	}

	getUID(): string {
		return this.user.uid;
	}

}