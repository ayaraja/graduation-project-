import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {PostProvider} from '../providers/post_providers';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { UserService } from '../services/user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  mainuser: AngularFirestoreDocument
sub
  anggota: any;
  name_customer: string;
  email: string
	profilePic: string

	password: string
  newpassword: string
  
  customers: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  constructor(	private router: Router,
  	private post: PostProvider,
    private storage: Storage,
    public user: UserService,
    private afs: AngularFirestore,
		private alertController: AlertController,

    public toastCtrl: ToastController) {
    //   this.mainuser = afs.doc(`users/${user.getUID()}`)
		// this.sub = this.mainuser.valueChanges().subscribe(event => {
		// 	this.email = event.email
    // })
    
     }
     async presentAlert(title: string, content: string) {
      const alert = await this.alertController.create({
        header: title,
        message: content,
        buttons: ['OK']
      })
  
      await alert.present()
    }
  ngOnInit() {
  }
  // updateCustomer(email,password,cpassword){
  //   if(password!=null)
  //   if(password==cpassword)
  //   this.user.updatePassword(password);
  //   if(email!=null)
  //   this.user.updateEmail(email);
    
  // }
//   updatePassword(Password){
// this.user.updatePassword(Password);
//   }
//   updateemail(email){
// this.user.updateEmail(email);
//   }
ngOnDestroy() {
  this.sub.unsubscribe()
}

// async updateDetails() {

//   if(!this.password) {
    
//     return this.presentAlert('Error!', 'You have to enter a password')
//   }

//   try {
//     await this.user.reAuth(this.user.getUseremail(), this.password)
//   } catch(error) {
//     return this.presentAlert('Error!', 'Wrong password!')
//   }

//   if(this.newpassword) {
//     await this.user.updatePassword(this.newpassword)
//   }

//   if(this.email !== this.user.getUseremail()) {
//     await this.user.updateEmail(this.email)
//     this.mainuser.update({
//       email: this.email
//     })
//   }

//   this.password = ""
//   this.newpassword = ""

//   await this.presentAlert('Done!', 'Your profile was updated!')

//   this.router.navigate(['/editprofile'])
// }
}
