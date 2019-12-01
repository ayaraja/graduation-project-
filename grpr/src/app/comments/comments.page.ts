import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import{comments,CommentsService}from'../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore,AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { map, switchMap } from 'rxjs/operators'
import { Subject }           from 'rxjs/Subject';
import { stringify } from '@angular/compiler/src/util';
import { observable } from 'rxjs';

export interface comments {
  id?:string;
  rid:string;
  message:string;


}


@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
   public people:AngularFireList<comments>;
   data:comments[];

  comments:comments={
    rid:'',
    message:'',
    createdAt:new Date().getTime(),

  }
     comment: comments[];
  items$: Observable<comments[]>;
  t$: Observable<comments[]>;

  rid$: BehaviorSubject<string|null>;
  ri$: BehaviorSubject<string|null>;

  message$: BehaviorSubject<string|null>;

  cid = null;
  cafeId:string;
  id= new Subject<String>();
  public currentEvent: any = {};
  joined$: Observable<any>

  constructor(private route: ActivatedRoute, private nav: NavController, private getcomment: CommentsService, 
    private loadingController: LoadingController,public afs: AngularFirestore,afdatabase:AngularFireDatabase) { 
   
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
    afs.collection<comments>('comments', ref => {
        let query : firebase.firestore.Query = ref;
        if(rid){query = query.where('rid', '==', this.cafeId)};
        return query;
      }).valueChanges()
    );

    

  }
  rid(){
    
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.cafeId = JSON.parse(params.special);
      }
    });

    this.rid$.next(this.cafeId);
  }
    
   ngOnInit() {

  this.rid();
  this.rid$ = new BehaviorSubject(null);
  this.rid$.next(this.cafeId);

  this.rid();

  this.items$ = Observable.combineLatest(

this.rid$
  ).switchMap(([rid]) => 
  this.afs.collection<comments>('comments', ref => {
      let query : firebase.firestore.Query = ref;
      if(rid){query = query.where('rid', '==', this.cafeId)};
      return query;
    }).valueChanges()
  );

  }

  ionViewWillEnter() {
     


  }
 
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'يتم التحميل . .'
    });
    await loading.present();
 
    this.getcomment.getcomment(this.cid).subscribe(res => {
      loading.dismiss();
      this.comments = res;
    });
  }

  
  async savecomments() {
   
    const loading = await this.loadingController.create({
      message: 'يتم الحفظ . .'
    });
    await loading.present();
  
    if (this.cid) {
      this.getcomment.updateactivity(this.comments, this.cid).then(() => {
        loading.dismiss();
      });
    } else {

      //  this.comments.rid=this.cafeId;
  this.getcomment.addacomment(this.comments,this.cafeId).then(() => {
    loading.dismiss();
  });
    }
  }

 
}
