import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController,NavController } from '@ionic/angular';
import {Fav} from "../shared/favlist.interface";
import {FavService} from "../services/fav.service";

@Component({
  selector: 'app-rest',
  templateUrl: './rest.page.html',
  styleUrls: ['./rest.page.scss'],
})
export class RestPage implements OnInit {

  RestListGroupe:{category: string, favorites: Fav[], icon: string};
  date = new Date();

  constructor(
    private navCtrl: NavController,
    private navParams: ModalController,
    public alertCtrl: AlertController,
    private favService: FavService
  ) {}

  ngOnInit(): void {
    // this.RestListGroupe =this.navParams.;
    
  }

  async onAddToFavorite(selectedRest: Fav) {
    const alert = this.alertCtrl.create({
      header: 'Add Restaurant',
      message: 'Are you sure want to add this to favorite?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            // this.favService.addRestToFav(selectedRest);
          },
        },
        {
          text: 'No',
          role: 'Cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });
    (await alert).present();
  }

  onRemoveFromFav(rest: Fav) {
    // this.favService.removeRestFromFav(rest);
  }

  isFavorite(rest: Fav) {
  // return this.favService.isRestFavorite(rest);
  }
}
