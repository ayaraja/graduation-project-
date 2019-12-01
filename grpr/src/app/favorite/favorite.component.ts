// import { Component, OnInit } from '@angular/core';

// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireList  } from 'angularfire2/database'; 
// @Component({
//   selector: 'app-favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css']
// })
// export class FavoriteComponent implements OnInit {
 
//   constructor(private af: AngularFireAuth) { }
 
//   items: AngularFireList<any[]>;
//   groceryList: AngularFireList<any[]>;
 
//   ngOnInit() {
//     this.items = this.af.database.list('/favoriteItem');
//     this.groceryList = this.af.database.list('/items');
//   }
 
//   add(item) {
//     this.groceryList.push(item);
//   }
 
//   delete(item) {
//     this.items.remove(item);
//   }
// }