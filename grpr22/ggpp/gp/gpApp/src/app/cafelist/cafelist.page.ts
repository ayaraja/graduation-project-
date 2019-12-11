import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { cafes, CafesService } from './../services/Cafes.service';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';



export interface cafes {
  id?: string;
  name: string;
  type_place: string;
  type_j: string;
  type_cat: string;
  vistor_Type: string;
  vistor_Type1: string;
  Date: string;
  Time_start: string;
  Time_end: string;
  cost: string;
  number_vist: number;
  rate: number;
}

@Component({
  selector: 'app-cafelist',
  templateUrl: './cafelist.page.html',
  styleUrls: ['./cafelist.page.scss'],
})

export class CafelistPage implements OnInit {

  public cafe: cafes[];


  private cafesCollection: AngularFirestoreCollection<cafes>;
  private cafes: Observable<cafes[]>;


  constructor(private route: ActivatedRoute,
    public db: AngularFirestore,
    private getrest: CafesService, ) {
  }



  FilterJSONData(ev: any) {
    const val = ev.target.value;
    console.log(val)
    const cafes = this.db.collection<cafes>("cafes", ref => ref.where("name", "==",val));
    this.cafes = cafes.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.cafes.subscribe(res => {
      this.cafe = res;
    })
 
  }





  ngOnInit() {
    this.getrest.getevents().subscribe(res => {
      this.cafe = res;
    });


  }





}
