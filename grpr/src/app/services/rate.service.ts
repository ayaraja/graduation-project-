import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface rate{
  id?:string;
  numberOfLikes:number;
  uid:string;
}

@Injectable({
  providedIn: 'root'
})
export class RateService {


  private rateCollection: AngularFirestoreCollection<rate>;
  private activitys: Observable<rate[]>;
  constructor(public db: AngularFirestore,private afs:AngularFireDatabase) {
    


    this.rateCollection = db.collection<rate>('rate');
    this.activitys = this.rateCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   addrate(rate:rate,uid:string) {
 rate.uid=uid;
    return this.rateCollection.add(rate);
  }
  
  getrate(id) {
    // return this.rateCollection.doc<rate>(id).valueChanges();
    // return this.db.collection<rate>("rate").where("uid","==",id);

    const r= this.db.collection('/rate/', ref => ref.where('uid', '==', id));
    return r;


  }
  git(){
    // return this.rateCollection.doc(id);

  }
   
  updateactivity(activity: rate, id: string) {
    return this.rateCollection.doc(id).update(activity);
  }

  }