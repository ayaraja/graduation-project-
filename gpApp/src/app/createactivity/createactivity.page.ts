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
  // text: string;
  // color: string;
  // size: string;
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
  selector: 'app-createactivity',
  templateUrl: './createactivity.page.html',
  styleUrls: ['./createactivity.page.scss'],
})
export class CreateactivityPage implements OnInit {
  mainuser: AngularFirestoreDocument;

  user:UserService;
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
    items$: Observable<Item[]>;
    res:Item[];
    sizeFilter$: BehaviorSubject<string|null>;
   namep$: BehaviorSubject<string|null>;
   name$: BehaviorSubject<string|null>;
  
   type_cat$:BehaviorSubject<string|null>;
   number_vist$:BehaviorSubject<number|null>;
   type_j1$:BehaviorSubject<string|null>;
   //namep$:string;
    colorFilter$: BehaviorSubject<string|null>;
    type_place$:BehaviorSubject<string|null>;
    type_j$:BehaviorSubject<string|null>;
    vistor_Type$:BehaviorSubject<string|null>;
    vistor_Type1$:BehaviorSubject<string|null>;
    vistor_Type2$: BehaviorSubject<string|null>;

    Time_start$:BehaviorSubject<string|null>;
    Time_end$:BehaviorSubject<string|null>;
    Date$:BehaviorSubject<string|null>;
    cost$:BehaviorSubject<number|null>;
  Date_end$:BehaviorSubject<string|null>;
    data: any;
    id:any;
    type_cato:string;
  
  constructor(public afs: AngularFirestore, private createactivityService: ResultService,public router:Router,private route: ActivatedRoute,
    private navCtrl:NavController, private loadingController: LoadingController,private auth:AngularFireAuth,private afdatabse :AngularFireDatabase) { 
  
    this.type_cat$=new BehaviorSubject(null);
    this.number_vist$=new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
     this.namep$ = new BehaviorSubject(null);
     this.name$ = new BehaviorSubject(null);
  
    this.type_place$ = new BehaviorSubject(null);
    this.type_j$ = new BehaviorSubject(null);
    this.type_j1$=new BehaviorSubject(null);
    this.vistor_Type$ = new BehaviorSubject(null);
    this.vistor_Type1$=new BehaviorSubject(null);
    this.vistor_Type2$=new BehaviorSubject(null);
    this.Time_start$ = new BehaviorSubject(null);
    this.Time_end$= new BehaviorSubject(null);
    this.Date$ = new BehaviorSubject(null);
    this.Date_end$ = new BehaviorSubject(null);
    this.cost$= new BehaviorSubject(null);
  
    this.items$ = Observable.combineLatest(
  
      this.type_cat$,
      this.type_place$,
      this.type_j$,
      this.type_j1$,
      this.vistor_Type$,
      this.vistor_Type1$,
      this.vistor_Type2$,
      this.Time_start$,
      this.Time_end$,
      this.Date$,
      this.cost$,
      this.number_vist$,
    this.name$
  
  
    ).switchMap(([type_cat,type_place,type_j,type_j1,vistor_Type,vistor_Type1,vistor_Type2,Time_start,Time_end,Date,cost,number_vist]) => 
    afs.collection<Item>('restaurants', ref => {
        let query : firebase.firestore.Query = ref;
        if(type_cat){query = query.where('type_cat', '==', type_cat)};
        if (type_place) { query = query.where('type_place', '==', type_place) };
        if (type_j) { query = query.where('type_j', '==', type_j) };
        if(type_j1){query=query.where('type_j1','==',type_j1)};
        if (vistor_Type) { query = query.where('vistor_Type', '==', vistor_Type) };
        if (vistor_Type1) { query = query.where('vistor_Type1', '==', vistor_Type1) };
        if (vistor_Type2) { query = query.where('vistor_Type2', '==', vistor_Type2) };
        if (Time_start) { query = query.where('Time_start', '==', Time_start) };
        if(Time_end){query = query.where('Time_end', '==', Time_end)}
        if (Date) { query = query.where('Date', '==', Date) };
        if (cost) { query = query.where('cost', '>=', cost) };
        if(number_vist){query = query.where('number_vist', '==', number_vist)};
        return query;
  
      }).valueChanges()
    );
   }
  
  ngOnInit() {
    this.activityid = this.route.snapshot.params['id'];
      if (this.activityid)  {
        this.loadTodo();
      }
  }
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
  
    this.createactivityService.getactivity(this.activityid).subscribe(res => {
      loading.dismiss();
      this.create = res;
    });
  }
  async createactivity() {
   
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
  
    if (this.activityid) {
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
  
      
  this.createactivityService.addactivity(this.create).then(() => {
    loading.dismiss();
  });
    }
  }
  
  
  
  /////////////////////////////////////////////test All////////
  namep(namep:string|null){
    this.namep$.next(namep);
  }
  type_cat(type_cat:string|null){
    this.type_cat$.next(type_cat);
  }
  type_place(type_place:string|null){
    this.type_place$.next(type_place);
  }
  type_j(type_j:string|null){
    this.type_j$.next(type_j);
  }
  type_j1(type_j1:string|null){
    this.type_j1$.next(type_j1);
  }
  vistor_Type(vistor_Type:string|null){
    this.vistor_Type$.next(vistor_Type);
  }
  vistor_Type1(vistor_Type1:string|null){
    this.vistor_Type1$.next(vistor_Type1);
  }
  vistor_Type2(vistor_Type2:string|null){
    this.vistor_Type2$.next(vistor_Type2);
  }
  number_vist(number_vist:number|null){
    this.number_vist$.next(number_vist);
  }
  
  Time_start(Time_start:string|null){
    this.Time_start$.next(Time_start);
  }
  Time_end(Time_end:string|null){
    this.Time_end$.next(Time_end);
  }
  Date(Date:string|null){
    this.Date$.next(Date);
  }
  cost(cost:number|null){
    this.cost$.next(cost);
  }
  Date_end(Date_end:string|null){
    this.Date_end$.next(Date_end);
  }
  
  openDetailsWithQueryParams(itemx) {
    // this.createactivity();
  
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(itemx)
      }
    };
    this.router.navigate(['result'], navigationExtras);
  
  }
  test(){
    this.createactivity();
  
    this.items$ = Observable.combineLatest(
      this.type_cat$,
      this.type_place$,
      this.type_j$,
      this.type_j1$,
      this.vistor_Type$,
      this.vistor_Type1$,
      this.Time_start$,
      this.Time_end$,
      this.Date$,
      this.cost$,
      this.number_vist$,
    this.name$
    ).switchMap(([type_cat,type_place,type_j,type_j1,vistor_Type,vistor_Type1,Time_start,Time_end,Date,cost,number_vist]) => 
    this.afs.collection<Item>('restaurants', ref => {
        let query : firebase.firestore.Query = ref;
        if(type_cat){query = query.where('type_cat', '==', type_cat)};
        if (type_place) { query = query.where('type_place', '==', type_place) };
        if (type_j) { query = query.where('type_j', '==', type_j) };
        if(type_j1){query=query.where('type_j1','==',type_j1)};
        if (vistor_Type) { query = query.where('vistor_Type', '==', vistor_Type) };
        if (vistor_Type1) { query = query.where('vistor_Type1', '==', vistor_Type1) };
        if (Time_start) { query = query.where('Time_start', '==', Time_start) };
        if(Time_end){query = query.where('Time_end', '==', Time_end)}
        if (Date) { query = query.where('Date', '==', Date) };
        if (cost) { query = query.where('cost', '>=', cost) };
        if(number_vist){query = query.where('number_vist', '==', number_vist)};
        return query;
  
      }).valueChanges()
    );

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.items$)
      }
    };
    this.router.navigate(['result'], navigationExtras); 
 
  }
  }