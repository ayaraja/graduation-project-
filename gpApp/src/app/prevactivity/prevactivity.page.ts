import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {SocialSharing}from'@ionic-native/social-sharing/ngx';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';

export interface Activity {
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
  selector: 'app-prevactivity',
  templateUrl: './prevactivity.page.html',
  styleUrls: ['./prevactivity.page.scss'],
})
export class PrevactivityPage implements OnInit {
  today:any;
  userId:string;

  items$: Observable<Activity[]>;
  Date$: BehaviorSubject<Date|null>;
  userId$: BehaviorSubject<string|null>;

  constructor(private socialsharing:SocialSharing,public afs: AngularFirestore,private afuth:AngularFireAuth) {
    this.afuth.authState.subscribe(user=>{
      if(user) this.userId=user.uid
    })
   }

  ngOnInit() {
    this.userId$ = new BehaviorSubject(null);
    this.Date$ = new BehaviorSubject(null);

  this.Date();
this.userd();
  this.items$ = Observable.combineLatest(
    this.userId$,

    this.Date$,


  ).switchMap(([userId,Date]) => 
  this.afs.collection<Activity>('activity', ref => {
      let query : firebase.firestore.Query = ref;
      if (userId) { query = query.where('uid','==', userId) };

      if (Date) { query = query.where('Date','<=', Date) };

  
      return query;

    }).valueChanges()
  );
  }
  Date(){
    const now = new Date();
    this.today = now.toISOString();
    this.Date$.next(this.today);
  }
userd(){
  this.afuth.authState.subscribe(user=>{
    if(user) this.userId=user.uid
  })
  this.userId$.next(this.userId);

}

}
