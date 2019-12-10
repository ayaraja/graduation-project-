import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { cafes, CafesService } from './../services/Cafes.service';

import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-cafelist',
  templateUrl: './cafelist.page.html',
  styleUrls: ['./cafelist.page.scss'],
})
export class CafelistPage implements OnInit {

  public searchTerm: string = "";
  public cafe: cafes[];





  constructor(private route: ActivatedRoute,
    public db: AngularFirestore,
    private getrest: CafesService, ) {
    this.initializeJSONData();
  }



  FilterJSONData(ev: any) {
    this.initializeJSONData();
    const val = ev.target.value;

  }


  initializeJSONData() {

  }



  ngOnInit() {
    this.getrest.getevents().subscribe(res => {
      this.cafe = res;
    });


  }


  search() {
    // this.db.collection("cafes", ref => ref.where("name", "==","test"))
    console.log(name)
  }



}
