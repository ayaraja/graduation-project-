// import { Component, OnInit } from '@angular/core';

// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireList  } from 'angularfire2/database';

// @Component({
//   selector: 'app-content',
//   templateUrl: './content.component.html',
//   styleUrls: ['./content.component.scss'],
// })
// export class ContentComponent implements OnInit {

//   items : AngularFireList<any[]>;
//   // create FirebaseListObservable reference  
//   favoriteItem: AngularFireList<any[]>
//   title = 'Grocery List';
//   newItem: any = ''; 
 
//   constructor(private af: AngularFireAuth) {
 
//   }
 
//   ngOnInit() {
//     this.favoriteItem = this.af.database.list('/favoriteItem'); 
//     this.items = this.af.database.list('/items');
//   }
//   add() {
//     this.items.push(this.newItem); 
//     this.newItem = ''; 
//   }
//   delete(item) {
//     this.items.remove(item);
//   }
 
//   // using the value that is being 
//   // passed in and push it to the
//   // firebase database
//   favorite(item) { 
//     this.favoriteItem.push(item); 
//   }
// }

