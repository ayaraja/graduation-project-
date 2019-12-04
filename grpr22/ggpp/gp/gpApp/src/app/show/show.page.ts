import { Component, OnInit, Query } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { NavController,LoadingController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { Router } from '@angular/router';
import { data } from '../result/result.page';
import {Activity,ResultService}from'../services/result.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { UserService } from '../services/user.service';


export interface Item {

  id?:string;
  namep:string;
  name:string;
  type_place:string;
  type_j:string;
  type_j1:string;
  type_cat:string;
  vistor_Type:string;
  vistor_Type1:string;
Date:string;
Time_start:string;
Time_end:string;
cost:number;
number_vist:number;

}

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  create: Activity = {
    uid:'',
    namep:'',
    type_place:'',
    type_j:'',
    vistor_Type:'',
    Date:'yy/mm/dd',
    Time_start:'hh/mm',
    Time_end:'hh/mm',
    cost:'',
    number_vist:0
  };
  activityid = null;
  activity:Activity[];

 DatE:string;
 Time_starT:string;
 Time_enD:string;
 cosT:string;
 number_visT:string;
Date_enD:string;
  items: Item[];
  data: any;

  productID:any;
  information=null;
  id=null;
  item=null;
  constructor(private route: ActivatedRoute,private router: Router,
    public shareddataservice: ResultService,public afs: AngularFirestore,
    private loadingController: LoadingController,private createactivityService: ResultService) 
    { 
   
    
       
        
// this.nameP=nav.get('namep'); 



      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.data = JSON.parse(params.special);
         
        
      //     this.nameP=this.data.namep;
      //     this.type_placE=this.data.type_place;
      //     this.type_J=this.data.type_j;
      //     this.type_J1=this.data.type_j1;
      //     this.type_cat=this.data.type_cat;
      //     this.vistor_TypE=this.data.vistor_Type;
      //     this.vistor_TypE1=this.data.vistor_Type1;
      //     this.vistor_TypE2=this.data.vistor_Type2;
      //     this.DatE=this.data.Date;
      //     this.Date_enD=this.data.Date_end
      //     this.Time_starT=this.data.Time_start;
      //     this.Time_enD=this.data.Time_enD;
      //     this.cosT=this.data.cost;
      //     this.number_visT=this.data.number_vist;
        }
      });
    }
      // console.log(this.data);
     

async createactivity() {
   
  const loading = await this.loadingController.create({
    message: 'Saving Todo..'
  });
  await loading.present();

  if (this.activityid!=null) {
    this.createactivityService.updateactivity(this.create, this.activityid).then(() => {
      loading.dismiss();
    });
  } else {
// this.auth.authState.subscribe(auth =>{
//   this.afdatabse.list('users/${auth.uid}')
// var user = firebase.auth().currentUser;
// let currentUser=firebase.auth().currentUser;
// this.afs.collection('users').doc(currentUser.uid).collection('activity').add({
//   name:value.create.name;
// })
// // })

    
this.createactivityService.addactivity(this.data).then(() => {
  loading.dismiss();
});
  }
}


  ngOnInit() {

  }

}


