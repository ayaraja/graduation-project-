import { Injectable, Query } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { restaurants } from './restaurants.service';
import 'firebase/firestore';
import * as firebase from 'firebase/app';
import { map, take } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export interface comments {
  id?: string;
  rid:string;
  message:string;
  createdAt:number;
}
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsCollection: AngularFirestoreCollection<comments>;
  private comments: Observable<comments[]>;
  restid:string;
  private comment:comments;
  private act:restaurants;
private rid:string;
items$: Observable<comments[]>;
rid$: BehaviorSubject<string|null>;

  constructor(db: AngularFirestore,private list:AngularFireDatabase,public afs: AngularFirestore) {

    var itemsRef = firebase.database().ref('comments');

    this.commentsCollection = db.collection<comments>('comments');
    this.comments = this.commentsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   
   getcomments() {
     

    return this.comments;
  }
 
  getcomment(id) {
    return this.commentsCollection.doc<comments>(id).valueChanges();
  }
 
  updateactivity(comment: comments, id: string) {
    return this.commentsCollection.doc(id).update(comment);
  }
 
  addacomment(comment: comments,cid:string) {
  comment.rid=cid;
    return this.commentsCollection.add(comment);
  }
 
  removecomment(id) {
    return this.commentsCollection.doc(id).delete();
  }


  getItemById(id){
  }
  
  
  getIdea(id: string): Observable<comments> {
    return this.commentsCollection.doc<comments>().valueChanges().pipe(
      take(1),
      map(comments => {
        comments.rid = id;
        return comments
      })
    );
    
  }

}
