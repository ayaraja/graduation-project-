import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CodeNode } from 'source-list-map';

@Component({
  selector: 'app-myfavorite',
  templateUrl: './myfavorite.page.html',
  styleUrls: ['./myfavorite.page.scss'],
})

export class MyfavoritePage implements OnInit {
  ngOnInit() {
  }
  favorites: Array<[]>;
  constructor(public navCtrl: NavController) {
  }
  remove(no){
    this.favorites.splice(no, 1)  
  };
}
