import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {SocialSharing}from'@ionic-native/social-sharing/ngx';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
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
  selector: 'app-currentactivity',
  templateUrl: './currentactivity.page.html',
  styleUrls: ['./currentactivity.page.scss'],
})


export class CurrentactivityPage implements OnInit {
today:any;
userId:string;

items$: Observable<Activity[]>;
Date$: BehaviorSubject<Date|null>;
Id$: BehaviorSubject<string|null>;

  constructor(private socialsharing:SocialSharing,public afs: AngularFirestore,private afuth:AngularFireAuth ) {
    this.afuth.authState.subscribe(user=>{
      if(user) this.userId=user.uid
    })
    this.Id$ = new BehaviorSubject(null);
    this.Date$ = new BehaviorSubject(null);
    this.userd();
    this.Date();
  
    this.items$ = Observable.combineLatest(
      this.Id$,
      this.Date$,
    ).switchMap(([Id,Date]) => 
    
    this.afs.collection<Activity>('activity', ref => {
        let query : firebase.firestore.Query = ref;
        if (Id) { query = query.where('uid','==', this.userId) };
        if (Date) { query = query.where('Date','>=', Date) };
  
  
    
        return query;
  
      }).valueChanges()
    );
   }
   
text='share';
userd(){
  this.afuth.authState.subscribe(user=>{
    this.userId=user.uid
  })
  this.Id$.next(this.userId);

}
Date(){
  const now = new Date();
  this.today = now.toISOString();
  this.Date$.next(this.today);
}

ngOnInit() {
  this.Id$ = new BehaviorSubject(null);
  this.Date$ = new BehaviorSubject(null);
  this.userd();
  this.Date();

  this.items$ = Observable.combineLatest(
    this.Id$,
    this.Date$,
  ).switchMap(([Id,Date]) => 
  
  this.afs.collection<Activity>('activity', ref => {
      let query : firebase.firestore.Query = ref;
      if (Id) { query = query.where('uid','==', Id) };
      if (Date) { query = query.where('Date','>=', Date) };


  
      return query;

    }).valueChanges()
  );
}

  sharewhatsApp(){
    this.socialsharing.shareViaWhatsApp(this.text).then(() =>{

    }).catch(e =>{

    })

  }


}
