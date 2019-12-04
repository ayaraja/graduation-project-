// import { Component, OnInit } from '@angular/core';
// import { Injectable } from '@angular/core';
import {SocialSharing}from'@ionic-native/social-sharing/ngx';
// import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { UserService } from '../services/user.service';
import { ResultService } from '../services/result.service';
import { Router } from '@angular/router';

// import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import{comments,CommentsService}from'../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { map, switchMap } from 'rxjs/operators'
import { Subject }           from 'rxjs/Subject';
import { stringify } from '@angular/compiler/src/util';
import { observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


export interface Activity {
  id?:string;
  uid: string;
  namep:string;
  type_place:string;
  type_j:string;
  vistor_Type:string;
  Date:string;
  Time_start:string;
  Time_end:string;
  cost:string;
 number_vist:number;
}

@Component({
  selector: 'app-currentactivity',
  templateUrl: './currentactivity.page.html',
  styleUrls: ['./currentactivity.page.scss'],
})


export class CurrentactivityPage implements OnInit {
  userid:any;
today:any;
// uid:string;
userId:string;
id:string;
items$: Observable<Activity[]>;
Date$: BehaviorSubject<string|null>;
uid$: BehaviorSubject<string|null>;
star:Observable<any[]>;
data:Observable<Activity[]>;
cafeId;
user:BehaviorSubject<string>;
post:Activity[];
  constructor(private socialsharing:SocialSharing,public afs: AngularFirestore,private afuth:AngularFireAuth,
    private u:UserService, private result:ResultService,private authService: AuthService ,
     private loadingController: LoadingController,private route: ActivatedRoute,    private db: AngularFireDatabase,) {
    this.afuth.authState.subscribe(user=>{
      if(user) this.userId=user.uid
    })


    // this.uid$ = new BehaviorSubject(null);
    // // this.Date$ = new BehaviorSubject(null);
    // this.uid();
    // // this.Date();
  
    // this.items$ = Observable.combineLatest(
    //   this.uid$,
    //   // this.Date$,
    // ).switchMap(([uid]) => 
    
    // this.afs.collection<Activity>('activity', ref => {
    //     let query : firebase.firestore.Query = ref;
    //     if (uid) { query = query.where('uid','==', uid) };
    //     // if (Date) { query = query.where('Date','<=', this.today) };
  
  
    
    //     return query;
  
    //   }).valueChanges()
    // );
    this.afuth.authState.subscribe(user=>{
      if(user) this.userId=user.uid
    })
//     const now = new Date();
//     this.today = now.toISOString();
//     this.user=new BehaviorSubject(this.userId);

//     this.uid();
// this.data=this.user.pipe(
//   switchMap(res=>this.afs.collection<Activity>('activity',ref=>ref.where('uid','==',this.userId)).valueChanges(),)
// )

   }

  //  .where('vistor_type','==','افراد')
text='share';
uid(){

  this.afuth.authState.subscribe(user=>{
    this.userId=user.uid
  })
 
  this.user.next(this.user.getValue());

}
Date(){
  const now = new Date();
  this.today = now.toISOString();
  this.Date$.next(this.today);
}

ngOnInit() {
  // this.star=this.result.getact();
// this.data=this.result.getact();
  //   // this.loadTodo();

  // this.uid$ = new BehaviorSubject(null);
  // // this.Date$ = new BehaviorSubject(null);
  // this.uid$.next(this.userId);
  // this.uid();
  // // this.Date();

  // this.items$ = Observable.combineLatest(
  //   this.uid$,
  //   // this.Date$,
  // ).switchMap(([uid]) => 
  
  // this.afs.collection<Activity>('activity', ref => {
  //     let query : firebase.firestore.Query = ref;
  //     if (uid) { query = query.where('uid','==', uid) };
  //     // if (Date) { query = query.where('Date','<=', this.today) };


  
  //     return query;

  //   }).valueChanges()
  // );

// const db=firebase.firestore();
// const d=db.collection('activity').where('Date', '==', this.uid);

}
async loadTodo() {
  const loading = await this.loadingController.create({
    message: 'Loading Todo..'
  });
  await loading.present();


  // this.result.getact().subscribe(res =>{
  //   loading.dismiss();
  //   this.data = res;
  // });
  // this.r=this.result.getact();

}

  sharewhatsApp(){
    this.socialsharing.shareViaWhatsApp(this.text).then(() =>{

    }).catch(e =>{

    })

  }


}
