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
  items$: Observable<Item[]>;
  name$: BehaviorSubject<string|null>;
  namep$: BehaviorSubject<string|null>;
  type_cat$:BehaviorSubject<string|null>;
  number_vist$:BehaviorSubject<string|null>;
  type_j1$:BehaviorSubject<string|null>;
  type_place$:BehaviorSubject<string|null>;
   type_j$:BehaviorSubject<string|null>;
   vistor_Type$:BehaviorSubject<string|null>;
   vistor_Type1$:BehaviorSubject<string|null>;
   vistor_Type2$: BehaviorSubject<string|null>;
   Time_start$:BehaviorSubject<string|null>;
   Time_end$:BehaviorSubject<string|null>;
   Date$:BehaviorSubject<string|null>;
   cost$:BehaviorSubject<string|null>;
   Date_end$:BehaviorSubject<string|null>;
   nameP:string;
   name:string;
   type_placE:string;
   type_J:string;
   type_J1:string;
   type_cat:string;
   vistor_TypE:string;
   vistor_TypE1:string;
   vistor_TypE2:string;

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
    private loadingController: LoadingController) 
    { 
   
    
       
        
// this.nameP=nav.get('namep'); 
    
function myBrokenFunction() {
  debugger;
  // do other stuff


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
     
}



  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   if (params && params.special) {
    //     this.data = JSON.parse(params.special);
    //   }
    // });
    // this.namep();
    //     this.type_place();
    // this.type_j();
    // this.type_j1();
    // this.vistor_Type();
    // this.vistor_Type1();
    // this.vistor_Type2();
    // this.Time_start();
    // this.Time_end();
    // this.Date();
    // this.cost();
    
    // this.type_cat$=new BehaviorSubject(null);
    // this.number_vist$=new BehaviorSubject(null);
    //  this.name$ = new BehaviorSubject(null);
    // this.type_place$ = new BehaviorSubject(null);
    // this.type_j$ = new BehaviorSubject(null);
    // this.type_j1$=new BehaviorSubject(null);
    // this.vistor_Type$ = new BehaviorSubject(null);
    // this.vistor_Type1$=new BehaviorSubject(null);
    // this.vistor_Type2$=new BehaviorSubject(null);
    // this.Time_start$ = new BehaviorSubject(null);
    // this.Time_end$= new BehaviorSubject(null);
    // this.Date$ = new BehaviorSubject(null);
    // this.Date_end$ = new BehaviorSubject(null);
    // this.cost$= new BehaviorSubject(null);
  
    // this.items$ = Observable.combineLatest(
  
    //   this.type_cat$,
    //   this.type_place$,
    //   this.type_j$,
    //   this.type_j1$,
    //   this.vistor_Type$,
    //   this.vistor_Type1$,
    //   this.vistor_Type2$,
    //   this.Time_start$,
    //   this.Time_end$,
    //   this.Date$,
    //   this.cost$,
    //   this.number_vist$,
    // this.name$
  
  
    // ).switchMap(([type_cat,type_place,type_j,type_j1,vistor_Type,vistor_Type1,vistor_Type2,Time_start,Time_end,Date,cost,number_vist]) => 
    // this.afs.collection<Item>('restaurants', ref => {
    //     let query : firebase.firestore.Query = ref;
    //     if(type_cat){query = query.where('type_cat', '==', type_cat)};
    //     if (type_place) { query = query.where('type_place', '==', type_place) };
    //     if (type_j) { query = query.where('type_j', '==', type_j) };
    //     if(type_j1){query=query.where('type_j1','==',type_j1)};
    //     if (vistor_Type) { query = query.where('vistor_Type', '==', vistor_Type) };
    //     if (vistor_Type1) { query = query.where('vistor_Type1', '==', vistor_Type1) };
    //     if (vistor_Type2) { query = query.where('vistor_Type2', '==', vistor_Type2) };
    //     if (Time_start) { query = query.where('Time_start', '==', Time_start) };
    //     if(Time_end){query = query.where('Time_end', '==', Time_end)}
    //     if (Date) { query = query.where('Date', '==', Date) };
    //     if (cost) { query = query.where('cost', '>=', cost) };
    //     if(number_vist){query = query.where('number_vist', '==', number_vist)};
    //     return query;
  
    //   }).valueChanges()
    // );
  }
  // namep(){
  //   // this.nameP = this.route.snapshot.paramMap.get('namep'); 

  //   this.namep$.next(this.nameP);
  // }

  // // type_cat(){
  // //   this.type_cat$.next(this.items.cat);
  // // }
  // type_place(){
  //   // this.type_placE = this.route.snapshot.paramMap.get('type_place');  
   
  //   this.type_place$.next(this.type_placE);
  // }
  // type_j(){
  //   // this.type_J = this.route.snapshot.paramMap.get('type_j');         

  //   this.type_j$.next(this.type_J);
  // }
  // type_j1(){
  //   // this.type_J1 = this.route.snapshot.paramMap.get('type_j1');         
    
  //   this.type_j1$.next(this.type_J1);
  // }
  // vistor_Type(){
  //   // this.vistor_TypE = this.route.snapshot.paramMap.get('vistor_Type');         
   
  //   this.vistor_Type$.next(this.vistor_TypE);
  // }
  // vistor_Type1(){
  //   // this.vistor_TypE1 = this.route.snapshot.paramMap.get('vistor_Type1');         
   
  //   this.vistor_Type1$.next(this.vistor_TypE1);
  // }
  // vistor_Type2(){
  //   // this.vistor_TypE2 = this.route.snapshot.paramMap.get('vistor_Type2');         
   
  //   this.vistor_Type2$.next(this.vistor_TypE2);
  // }
  // number_vist(){
    
  //   // this.number_visT= this.route.snapshot.paramMap.get('number_vist');  
  //   this.number_vist$.next(this.number_visT);
  // }
  
  // Time_start(){
         
  //   // this.Time_starT = this.route.snapshot.paramMap.get('Time_start');         
  //   this.Time_start$.next(this.Time_starT);
  // }
  // Time_end(){
  //   // this.Time_enD = this.route.snapshot.paramMap.get('Time_end');         

  //   this.Time_end$.next(this.Time_enD);
  // }
  // Date(){
  //   // this.DatE = this.route.snapshot.paramMap.get('Date');         
  //   this.Date$.next(this.DatE);
  // }
  // cost(){
  //   // this.cosT = this.route.snapshot.paramMap.get('cost'); 

  //   this.cost$.next(this.cosT);
  // }
  // Date_end(){
  //   // this.Date_enD = this.route.snapshot.paramMap.get('Date_end');   

  //   this.Date_end$.next(this.Date_enD);
  // }

}


