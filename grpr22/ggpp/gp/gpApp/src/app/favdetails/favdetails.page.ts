import { Component, OnInit } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import {favorites, FavService } from '../services/fav.service';
import { LoadingController } from '@ionic/angular';
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
  selector: 'app-favdetails',
  templateUrl: './favdetails.page.html',
  styleUrls: ['./favdetails.page.scss'],
})
export class FavdetailsPage implements OnInit {

  fav: favorites ={
    uid: '',
    id: '',
    name: '',
    type_place: '',
    type_j: '',
    vistor_Type: '',
    Time_start: '',
    Time_end: '',
    number_vist: 0
}

  id = null;
  cafeId = null;

  
  favoritesCollection: AngularFirestoreCollection<favorite>;
  favorites: Observable<favorite[]>;

  // favorites: Array<[]>;
  constructor(public navCtrl: NavController,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private favService: FavService,
    private loadingController: LoadingController) {
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.cafeId = JSON.parse(params.special);
        }
      });
      
      this.id = this.route.snapshot.params['id'];
  }


  ngOnInit() {
    this.cafeId = this.route.snapshot.params['id'];
    if (this.cafeId)  {
      this.loadTodo();}

    this.favService.getactivity(this.id).subscribe(res => {
      this.fav = res;
    });
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
  
    this.favService.getactivity(this.cafeId).subscribe(res => {
      loading.dismiss();
      this.fav = res;
    });
    
  }
  // getfav(id){
  //   return this.favoritesCollection.doc<favorite>(id).valueChanges();

  // }
}
