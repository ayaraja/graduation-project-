import { Component, OnInit } from '@angular/core';
import { Malls, MallsService } from './../services/malls.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { reject } from 'q';
import { AngularFireAuth } from '@angular/fire/auth'

export interface rate {
  id?: string;
  numberOfLikes: Number;
  uid: string;
}
@Component({
  selector: 'app-mallshow',
  templateUrl: './mallshow.page.html',
  styleUrls: ['./mallshow.page.scss'],
})
export class MallshowPage implements OnInit {

  isYesClicked: boolean = false
  isNoClicked: boolean = false

  mall: Malls = {
    name: '',
    Time_start: '',
    Time_end: '',
    rate: 0,
  }
  rate: rate = {
    numberOfLikes: 1,
    uid: ''
  };
  malls: Malls[];
  mallId = null;
  constructor(private route: ActivatedRoute,
    private nav: NavController,
    private getrest: MallsService,
    private loadingController: LoadingController,
    public router: Router,
    public afAuth: AngularFireAuth,
    private aft: AngularFirestore) { }

  ngOnInit() {
    this.mallId = this.route.snapshot.params['id'];
    if (this.mallId) {
      this.loadTodo();
    }
  }
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.getrest.getmall(this.mallId).subscribe(res => {
      loading.dismiss();
      this.mall = res;
    });
  }
  addFev() {

    this.afAuth.authState.subscribe(user => {
      console.log(user.uid);
      if (user.uid) {
        const collection: AngularFirestoreCollection<any> = this.aft.collection('favorites');
        collection.add({
          name: this.mall.name,
          org_id: this.mallId,
          'user_id': user.uid,
          Time_start: this.mall.Time_start,
          Time_end: this.mall.Time_end
        })

          .then(res => { console.log(res) }, err => reject(err));
      }

    });
  }

  open() {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.mallId)
      }
    };
    this.router.navigate(['comments'], navigationExtras);
  }
  async likeButtonClick(rate, id) {

    const loading = await this.loadingController.create({
      message: ''
    });
    await loading.present();

    if (this.mall.rate != null) {
      this.mall.rate++;
      this.getrest.updateactivity(this.mall, this.mallId).then(() => {
        loading.dismiss();
      });
    } else {
      this.mall.rate = 1;
      this.getrest.updateactivity(this.mall, this.mallId).then(() => {
        loading.dismiss();
      });
    }

  }
  map(map) {
    window.open(map, '_system', 'location=yes');

  }
}


