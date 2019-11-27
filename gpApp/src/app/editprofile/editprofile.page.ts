import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {PostProvider} from '../providers/post_providers';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  anggota: any;
  name_customer: string;
  
  customers: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  constructor(	private router: Router,
  	private post: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  updateCustomer(name,email,password){
  	this.router.navigate(['/home/' + name + '/' + email + '/' + password]);
  }

}
