import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


export interface Activity {
  id?: string;
  namep:string;
  type_place:string;
  type_j:string;
  vistor_Type:string;
Date:string;
Time_start:string;
Time_end:string;
cost:string;
number_vist:number;
}

export interface Malls {
  
  name:string;
Time_start:string;
Time_end:string;
img:string;
}


@Injectable({
  providedIn: 'root'
})
export class CreateactivityService {
  private activityCollection: AngularFirestoreCollection<Activity>;
  private activitys: Observable<Activity[]>;


  constructor(db: AngularFirestore) {
    

    this.activityCollection = db.collection<Activity>('activity');
    this.activitys = this.activityCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }
   getactivitys() {
    return this.activitys;
  }
 
  getactivity(id) {
    return this.activityCollection.doc<Activity>(id).valueChanges();
  }
 
  updateactivity(activity: Activity, id: string) {
    return this.activityCollection.doc(id).update(activity);
  }
 
  addactivity(activity: Activity) {
    return this.activityCollection.add(activity);
  }
 
  removeactivity(id) {
    return this.activityCollection.doc(id).delete();
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
