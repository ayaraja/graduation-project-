import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { cafes, CafesService } from './../services/cafes.service';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { Router } from '@angular/router';
import { rate, RateService } from '../services/rate.service';
import { observable, empty } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { reject } from 'q';
import { AngularFireAuth } from '@angular/fire/auth'


export interface rate {
  id?: string;
  numberOfLikes: Number;
  uid: string; 
}

@Component({
  selector: 'app-cafeshow',
  templateUrl: './cafeshow.page.html',
  styleUrls: ['./cafeshow.page.scss'],
})
export class CafeshowPage implements OnInit {

  isYesClicked:boolean = false
  isNoClicked:boolean = false

  cafe: cafes = {
    name: '',
    type_place: '',
    type_j: '',
    type_cat: '',
    vistor_Type: '',
    vistor_Type1: '',
    Date: '',
    Time_start: '',
    Time_end: '',
    cost: '',
    number_vist: 0,
    rate: 0,
  };

  rate: rate = {
    numberOfLikes: 1,
    uid: ''
  };
  items$: Observable<rate[]>;
  star: Observable<any[]>;
  rid$: BehaviorSubject<string | null>;
  rates: rate[];
  cafeId = null;
  constructor(private route: ActivatedRoute,
    private nav: NavController,
    private getrest: CafesService,
    private loadingController: LoadingController,
    public router: Router,
    private like: RateService,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private aft: AngularFirestore) {
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
        let query: firebase.firestore.Query = ref;
        if (rid) { query = query.where('uid', '==', this.rid) };
        return query;
      }).valueChanges()
    );



  }
  rid() {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.cafeId = JSON.parse(params.special);
      }
    });

    this.rid$.next(this.cafeId);

  }

  ngOnInit() {
    this.cafeId = this.route.snapshot.params['id'];
    if (this.cafeId) {
      this.loadTodo();

      this.rid();
      this.rid$ = new BehaviorSubject(null);
      this.rid$.next(this.cafeId);

      this.rid();

      this.items$ = Observable.combineLatest(

        this.rid$
      ).switchMap(([rid]) =>
        this.afs.collection<rate>('rate', ref => {
          let query: firebase.firestore.Query = ref;
          if (rid) { query = query.where('uid', '==', this.cafeId) };
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
    // this.like.getIdea(this.cafeId).subscribe(res =>{
    //   loading.dismiss();
    //   this.rate = res;
    // });
    this.star = this.like.getrate(this.cafeId);

  }

  // method that save cafes into data base "favorites" table
  addFev() {

    this.afAuth.authState.subscribe(user => {
      console.log(user.uid);
      if (user.uid) {
        const collection: AngularFirestoreCollection<any> = this.aft.collection('favorites');
        collection.add({
          name: this.cafe.name,
          org_id: this.cafeId,
          'user_id': user.uid,
          type_j: this.cafe.type_j,
          vistor_Type: this.cafe.vistor_Type,
          vistor_Type1: this.cafe.vistor_Type1,
          Time_start: this.cafe.Time_start
          // Time_end: this.cafe.Time_end
        })

          .then(res => { console.log(res) }, err => reject(err));
      }

    });
  }
  open() {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.cafeId)
      }
    };
    this.router.navigate(['comments'], navigationExtras);
  }
  test(url) {
    window.open(url, '_system', 'location=yes');
  }
  async likeButtonClick(rate, id) {

    const loading = await this.loadingController.create({
      message: ''
    });
    await loading.present();

    if (this.cafe.rate != null) {
      this.cafe.rate++;
      this.getrest.updateactivity(this.cafe, this.cafeId).then(() => {
        loading.dismiss();
      });
    } else {
      this.cafe.rate = 1;
      this.getrest.updateactivity(this.cafe, this.cafeId).then(() => {
        loading.dismiss();
      });

    }

    //  this.comments.rid=this.cafeId;

  }
  t(numberOfLikes) {
    // this.like.getrate(this.cafeId).subscribe(res => {
    //   loading.dismiss();
    //   this.cafe = res;
    // });
    // this.numberOfLikes++;
    // this.likeButtonClick();

  }
  map(map) {
    window.open(map, '_system', 'location=yes');

  }
}


