import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Time } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import{AngularFireAuth}from'angularfire2/auth';


export interface Item {
  // text: string;
  // color: string;
  // size: string;
  id?:string;
  namep:string;
  name:string;
  type_place:string;
  type_j:string;
  type_j1:string;
  type_cat:string;
  vistor_Type:string;
  vistor_Type1:string;
Date:string;
Time_start:string;
Time_end:string;
cost:number;
number_vist:number;
img:string;

}

export interface Activity {
  uid: string;
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
export interface res{
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

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  activity:AngularFireList<Activity[]>
  userId:string;
  private act:Activity;
  private ItemCollection: AngularFirestoreCollection<Item>;
  private items: Observable<Item[]>;
  private resCollection: AngularFirestoreCollection<Activity>;
  private res: Observable<Activity[]>;


  constructor(db: AngularFirestore,getres:AngularFirestore, public afs:AngularFirestore,private afuth:AngularFireAuth) {
    this.afuth.authState.subscribe(user=>{
      if(user) this.userId=user.uid
    })
    
    this.resCollection = getres.collection<Activity>('activity');
    this.res=this.resCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    //
    
        this.ItemCollection = getres.collection<Item>('restaurants');
        this.items=this.ItemCollection.snapshotChanges().pipe(
          map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            });
          })
        );}
        
       getactivitys() {
        return this.res;
      }
     
      getactivity(id) {
        return this.resCollection.doc<Activity>(id).valueChanges();
      }
     
      updateactivity(activity: Activity, id: string) {
        return this.resCollection.doc(id).update(activity);
      }
     
      addactivity(todo: Activity) {
    todo.uid=this.userId;

    return this.resCollection.add(todo);
      }
     
      removeactivity(id) {
        return this.ItemCollection.doc(id).delete();
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
    
      getrestaurants() {
        return this.items;
      }
     
      getrestaurant(id) {
        return this.ItemCollection.doc<Item>(id).valueChanges();
      }
      getrestaurantname(name) {
      //  return this.ItemCollection.valueChanges.name.match(name);
        return this.ItemCollection.doc<Item>(name).valueChanges();
      }
      getrestaurantc(type_place) {
        return this.ItemCollection.doc<Item>(type_place).valueChanges();
      }
    
      getUID(): string {
        return this.act.uid;
      }
    }