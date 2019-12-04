import { Injectable } from '@angular/core';
// import { Fav } from '../shared/favlist.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';


export interface favorites {
  uid: string;
  id?: string;
  name: string;
  type_place: string;
  type_j: string;
  vistor_Type: string;
  Time_start: string;
  Time_end: string;
  number_vist: number;
}

@Injectable({
  providedIn: 'root'
})
export class FavService {

  private favCollection: AngularFirestoreCollection<favorites>;
  private favorites: Observable<favorites[]>;
  userId: any;
  favorite: any;


  constructor(public db: AngularFirestore, public afuth: AngularFireAuth) {
    // this.afuth.authState.subscribe(user => {
    //   if (user) this.userId = user.uid

    // })

    this.favCollection = db.collection<favorites>('favorites');
    this.favorites = this.favCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  


  getevents() {
    return this.favorites;
  }

  getactivity(id) {
    return this.favCollection.doc<favorites>(id).valueChanges();
  }

  addactivity(todo: favorites) {
    todo.uid = this.userId;

    return this.favCollection.add(todo);
  }

  removeactivity(id) {
    return this.favCollection.doc(id).delete();
  }

}