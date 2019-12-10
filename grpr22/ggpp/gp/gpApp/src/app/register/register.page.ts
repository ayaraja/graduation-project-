import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	email: string = ""
	password: string = ""
	cpassword: string = ""
	activities:string=""
	constructor(
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router
		) { }
  ngOnInit() {
  }

	async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

	async register() {
		const { email, password, cpassword,activities } = this
		if(password !== cpassword) {
			return console.error("كلمة المرور لاتتطابق")
		}

		try {
			const res = await this.afAuth.auth.createUserWithEmailAndPassword(email , password)

			this.afstore.doc(`users/${res.user.uid}`).set({
				email,
				activities,
				password,
			})

			this.user.setUser({
				email,
				uid: res.user.uid,
				activities,
				password
				
			})

			this.presentAlert('نجاح', 'تم التسجيل بنجاح!')
			this.router.navigate(['/homepage'])

		} catch(error) {
			console.dir(error)
		}
	}

}
