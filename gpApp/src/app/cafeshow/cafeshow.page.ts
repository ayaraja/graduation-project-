import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { cafes,CafesService } from './../services/cafes.service';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { Router } from '@angular/router';
import{rate,RateService}from'../services/rate.service';
import { observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
export interface rate{
  id?:string;
  numberOfLikes:Number;
  uid:string;
}

@Component({
  selector: 'app-cafeshow',
  templateUrl: './cafeshow.page.html',
  styleUrls: ['./cafeshow.page.scss'],
})
export class CafeshowPage implements OnInit {

cafe:cafes={
  name:'',
  type_place:'',
  type_j:'',
  type_cat:'',
  vistor_Type:'',
  vistor_Type1:'',
Date:'',
Time_start:'',
Time_end:'',
cost:'',
number_vist:0,
};

  rate:rate={
  numberOfLikes:1,
  uid:''
  };
  items$: Observable<rate[]>;

  rid$: BehaviorSubject<string|null>;
rates:rate[];
  cafeId = null;
  constructor(public afAuth: AngularFireAuth,private aft: AngularFirestore,private route: ActivatedRoute, private nav: NavController, private getrest: CafesService,
     private loadingController: LoadingController,public router:Router,private like:RateService,public afs: AngularFirestore ) {
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.cafeId = JSON.parse(params.special);
        }
      });

    this.rid$ = new BehaviorSubject(null);
    this.rid$.next(this.cafeId);

    this.rid();

    this.items$ = Observable.combineLatest(

this.rid$
    ).switchMap(([rid]) =>
    afs.collection<rate>('rate', ref => {
        let query : firebase.firestore.Query = ref;
        if(rid){query = query.where('uid', '==', this.rid)};
        return query;
      }).valueChanges()
    );



  }
  rid(){

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.cafeId = JSON.parse(params.special);
      }
    });

    this.rid$.next(this.cafeId);

      }

   ngOnInit() {
    this.cafeId = this.route.snapshot.params['id'];
    if (this.cafeId)  {
      this.loadTodo();

  this.rid();
  this.rid$ = new BehaviorSubject(null);
  this.rid$.next(this.cafeId);

  this.rid();

  this.items$ = Observable.combineLatest(

this.rid$
  ).switchMap(([rid]) =>
  this.afs.collection<rate>('rate', ref => {
      let query : firebase.firestore.Query = ref;
      if(rid){query = query.where('uid', '==', this.cafeId)};
      return query;
    }).valueChanges()
  );


  }

}
async loadTodo() {
  const loading = await this.loadingController.create({
    message: 'Loading Todo..'
  });
  await loading.present();

  this.getrest.getevent(this.cafeId).subscribe(res => {
    loading.dismiss();
    this.cafe = res;
  });

}
  open(){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.cafeId)
      }
    };
    this.router.navigate(['comments'], navigationExtras);
  }

  addFev(){

    this.afAuth.authState.subscribe(user => {
        console.log(user.uid);
        const collection: AngularFirestoreCollection<Item> = this.aft.collection('favorites');
        collection.add({org_id:this.cafe.uid,'user_id':this.user.uid})
        .then(res => {console.log(res)}, err => reject(err));
    });


  }

  test(url){
    window.open(url,'_system', 'location=yes');
  }
  async likeButtonClick() {

  const loading=await this.loadingController.create({
    message:''
   });
await loading.present();

this.like.addrate(this.rate,this.cafeId).then(()=>{
loading.dismiss();
});
}
t(numberOfLikes){
  // this.like.getrate(this.cafeId).subscribe(res => {
  //   loading.dismiss();
  //   this.cafe = res;
  // });
  // this.numberOfLikes++;
this.likeButtonClick();

}
onRateChange(event) {
  console.log('Your rate:', event);
}
  }
