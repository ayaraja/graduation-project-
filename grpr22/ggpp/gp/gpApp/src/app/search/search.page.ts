import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {
  // text: string;
  // color: string;
  // size: string;
  id?: string;
  namep: string;
  name: string;
  type_place: string;
  type_j: string;
  type_j1: string;
  type_cat: string;
  vistor_Type: string;
  vistor_Type1: string;
  Date: string;
  Time_start: string;
  Time_end: string;
  cost: number;
  number_vist: number;

}
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {


  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  public cafes: any[];
  // public loadedlist: any[];

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs.collection(`cafes`).valueChanges().subscribe(cafes => {
      this.cafes = cafes;
      // this.loadedlist = cafes;
    });
  }

  // initializeItems(): void {
  // this.cafes = this.loadedlist;
  // }


  // filterList(evt: { toLowerCase: () => void; }) {
  // this.initializeItems();

  //   this.cafes = this.cafes.filter(cafe => {
  //     if (cafe.name && evt) {
  //       if (cafe.name.toLowerCase().indexOf(evt.toLowerCase()) > -1) {
  //         return true;
  //       }
  //       return false;
  //     }
  //   });
  // }

  filterList(event) {


    const search = event.target.value;
    console.log(search);

    // this.itemCollection = this.afs.collection<Item>('cafes', ref => {
    //   // Compose a query using multiple .where() methods
    //   return ref
    //     .where('name', '==', search)

    // });

    this.cafes = this.cafes.filter(cafes => {
      if (cafes.name && event) {
        if (cafes.name.indexOf(event) - 1) {
          ref => {
            return ref
              .where('name', '==', event)
          }
          console.log(search);
        }
      }
    });

  }



}
