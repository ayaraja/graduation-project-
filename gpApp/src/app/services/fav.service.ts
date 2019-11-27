import { Injectable } from '@angular/core';
import { Fav } from '../shared/favlist.interface';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  public favrest:Fav[] = [];

  // addRestToFav(rest:Fav){
  //   this.favrest.push(rest);
  //   console.log(this.favrest);
  // }

//   removeRestFromFav(rest:Fav) {
//    // const position = this.favrest.findIndex((rest1:Fav) =>{
//       return rest1.id = rest.id;
//     });

//     this.favrest.splice(position,1);
//   }

//   getFavoriteRest() {
//     return this.favrest.slice();
//   }

//   isRestFavorite(rest: Fav) {
//     return this.favrest.find((rest1: Fav) => {
//       return rest1.id === rest.id;
//     });
//   }
//   constructor() { }
// }
}