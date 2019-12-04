import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CodeNode } from 'source-list-map';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import {favorites, FavService } from '../services/fav.service';
import { ActivatedRoute } from '@angular/router';

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

  fav:favorites[];

  
  favoritesCollection: AngularFirestoreCollection<favorite>;
  favorites: Observable<favorite[]>;

  // favorites: Array<[]>;
  constructor(public navCtrl: NavController,
    private afs: AngularFirestore,
    private route: ActivatedRoute,private nav: NavController, private getrest: FavService) {
  }
  // remove(no){
  //   this.favorites.splice(no, 1)  
  // };

  ngOnInit() {
    // this.favoritesCollection = this.afs.collection('favorites')
    // this.favorites = this.favoritesCollection.valueChanges();

    this.getrest.getevents().subscribe(res => {
      this.fav = res;
    });

    // this.getrest.removeactivity(this.fav).subscribe(res => {
    //   this.fav = res;
    // });
  }

  delete(item: any){
    this.afs.doc('favorites/$(item.id)').delete();
  }
}
