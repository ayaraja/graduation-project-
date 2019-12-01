import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

interface favorite {
  Time_end: string;
  Time_start: string;
  name: string;
  org_id: string;
  type_j: string;
  user_id: string;
  vistor_Type: string;
  vistor_Type1: string;
  id?: any;
}
@Component({
  selector: 'app-myfavorite',
  templateUrl: './myfavorite.page.html',
  styleUrls: ['./myfavorite.page.scss'],
})

export class MyfavoritePage implements OnInit {


  ngOnInit() {
    this.favoritesCollection = this.afs.collection('favorites')
    this.favorites = this.favoritesCollection.valueChanges()
  }

  favoritesCollection: AngularFirestoreCollection<favorite>;
  favorites: Observable<favorite[]>;

  constructor(private afs: AngularFirestore) {
  }

  // deleteFav(){
  // }



}