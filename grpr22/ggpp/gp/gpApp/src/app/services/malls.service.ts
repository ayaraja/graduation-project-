import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


export interface Malls {
  id?: string;
  name:string;
Time_start:string;
Time_end:string;
rate:number;

}

@Injectable({
  providedIn: 'root'
})
export class MallsService {
  private mallsCollection: AngularFirestoreCollection<Malls>;
  private malls: Observable<Malls[]>;

  constructor(getres:AngularFirestore) { 
    
    this.mallsCollection = getres.collection<Malls>('malls');
    this.malls=this.mallsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }


  
  getmalls() {
    return this.malls;
  }
 
  getmall(id) {
    return this.mallsCollection.doc<Malls>(id).valueChanges();
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
  updateactivity(activity: Malls, id: string) {
    return this.mallsCollection.doc(id).update(activity);
  }
  
}


