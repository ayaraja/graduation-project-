import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationExtras } from "@angular/router";

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
  selector: 'app-restaurantslist',
  templateUrl: './restaurantslist.page.html',
  styleUrls: ['./restaurantslist.page.scss'],
})
export class RestaurantslistPage implements OnInit {

  listshow1: boolean;
  listshow2: boolean;
  listshow3: boolean;
  listshow4: boolean;
  listshow5: boolean;
  listshow6: boolean;
  listshow7: boolean;
  listshow8: boolean;
  items$: Observable<Item[]>;
  type_place$:BehaviorSubject<string|null>;


  constructor(public afs: AngularFirestore,public router:Router){
    this.listshow1 = false;
    this.listshow2 = false;
    this.listshow3 = false;
    this.listshow4 = false;
    this.listshow5 = false;
    this.listshow6 = false;
    this.listshow7 = false;
    this.listshow8 = false;
    this.type_place$ = new BehaviorSubject(null);

  this.items$ = Observable.combineLatest(
  
    this.type_place$,

  ).switchMap(([type_place]) => 
  afs.collection<Item>('restaurants', ref => {
      let query : firebase.firestore.Query = ref;
      if (type_place) { query = query.where('type_place', '==', type_place) };
     
      return query;

    }).valueChanges()
  );
}
type_place(type_place:string|null){
  this.type_place$.next(type_place);
}
  ngOnInit() {
  }

  appearlist1() {
    this.listshow1 = true;
  }
  noappearlist1() {
    this.listshow1 = false;
  }
open(id){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(id)
    }
  };
  this.router.navigate(['resshow'], navigationExtras);
}

noappearlist2() {
  this.listshow2 = false;
}

appearlist2() {
  this.listshow2 = true;
}
// --------------------

noappearlist3() {
  this.listshow3 = false;
}

appearlist3() {
  this.listshow3 = true;
}
// --------------------

noappearlist4() {
  this.listshow4 = false;
}

appearlist4() {
  this.listshow4 = true;
}
// --------------------

noappearlist5() {
  this.listshow5 = false;
}

appearlist5() {
  this.listshow5 = true;
}
// --------------------

noappearlist6() {
  this.listshow6 = false;
}

appearlist6() {
  this.listshow6 = true;
}
// --------------------

noappearlist7() {
  this.listshow7 = false;
}

appearlist7() {
  this.listshow7 = true;
}
// --------------------

noappearlist8() {
  this.listshow8 = false;
}

appearlist8() {
  this.listshow8 = true;
}



}
