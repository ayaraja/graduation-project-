import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


export interface event {
  id?: string;
  name:string;
  Type:string;
  vistor_Type:string;
  vistor_Type1:string;
Date:string;
Date_end:string;
Time_start:string;
Time_end:string;
}
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventCollection: AngularFirestoreCollection<event>;
  private event: Observable<event[]>;

  constructor(getres:AngularFirestore) { 
    this.eventCollection = getres.collection<event>('event');
    this.event=this.eventCollection.snapshotChanges().pipe(
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
    return this.event;
  }
 
  getevent(id) {
    return this.eventCollection.doc<event>(id).valueChanges();
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

