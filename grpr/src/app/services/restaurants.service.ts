import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

export interface restaurants {
  id?: string;
  name:string;
  type_place:string;
  type_j:string;
  type_cat:string;
  vistor_Type:string;
Date:string;
Time_start:string;
Time_end:string;
cost:string;
number_vist:number;
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private resCollection: AngularFirestoreCollection<restaurants>;
  private res: Observable<restaurants[]>;

  constructor(getres:AngularFirestore) { 
    
    this.resCollection = getres.collection<restaurants>('restaurants');
    this.res=this.resCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  
  getrestaurants() {
    return this.res;
  }
 
  getrestaurant(id) {
    return this.resCollection.doc<restaurants>(id).valueChanges();
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
