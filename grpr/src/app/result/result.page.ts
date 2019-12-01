import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { Router } from '@angular/router';
import { Item,ResultService } from './../services/result.service';




export interface Item {
  // text: string;
  // color: string;
  // size: string;
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
export interface data {
  // text: string;
  // color: string;
  // size: string;
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
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  items$: Observable<Item[]>;

  Items: Item[];
  productID:any;
  test:any;
  img:any;
  data:any;
  
  constructor(public afs: AngularFirestore,public router:Router,private route: ActivatedRoute,private navCtrl:NavController, private getrest:ResultService) { 
    
this.route.queryParams.subscribe(params => {
  if (params && params.special) {
    this.data = JSON.parse(params.special);
  }
});
   }
   ngOnInit() {
    this.getrest.getrestaurants().subscribe(res => {
      this.Items = res;
    });
  }
  
openDetailsWithQueryParams() {
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.data)
    }
  };
  this.router.navigate(['show'], navigationExtras);
}

}
