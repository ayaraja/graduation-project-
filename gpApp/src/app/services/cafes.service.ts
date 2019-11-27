import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


export interface cafes {
  id?: string;
  name:string;
  type_place:string;
  type_j:string;
  type_cat:string;
  vistor_Type:string;
  vistor_Type1:string;
Date:string;
Time_start:string;
Time_end:string;
cost:string;
number_vist:number;
}
@Injectable({
  providedIn: 'root'
})
export class CafesService {

  private cafesCollection: AngularFirestoreCollection<cafes>;
  private cafes: Observable<cafes[]>;

  constructor(getres:AngularFirestore) { 
    this.cafesCollection = getres.collection<cafes>('cafes');
    this.cafes=this.cafesCollection.snapshotChanges().pipe(
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
    return this.cafes;
  }
 
  getevent(id) {
    return this.cafesCollection.doc<cafes>(id).valueChanges();
  }

 

  formateDate(date:Date):string{
    const day=date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    return '${year}-${month}-${day}';
  }
  formateTime(time:Time):string{
    const hours=time.hours;
    const minutes=time.minutes;
   
    return '${hours}:${minutes}';
  }

  
}

