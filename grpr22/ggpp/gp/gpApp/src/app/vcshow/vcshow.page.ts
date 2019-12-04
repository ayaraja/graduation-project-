import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { cafes,CafesService } from './../services/cafes.service';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { Router } from '@angular/router';
import{rate,RateService}from'../services/rate.service';
import { observable, empty } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-vcshow',
  templateUrl: './vcshow.page.html',
  styleUrls: ['./vcshow.page.scss'],
})
export class VcshowPage implements OnInit {

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
  rate:0,
  };
  cafeId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: CafesService,
    private loadingController: LoadingController,public router:Router,private like:RateService,public afs: AngularFirestore )  { }

  ngOnInit() {
    this.cafeId = this.route.snapshot.params['id'];
    if (this.cafeId)  {
      this.loadTodo();
      
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
  test(url){
    window.open(url,'_system', 'location=yes');
  }
  map(map){
    window.open(map,'_system', 'location=yes');
  
  }
}
