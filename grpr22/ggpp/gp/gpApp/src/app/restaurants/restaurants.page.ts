import { Component, OnInit } from '@angular/core';
import { restaurants,RestaurantsService } from './../services/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  rest: restaurants[];

  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: RestaurantsService, private loadingController: LoadingController) { }

  ngOnInit() {

    this.getrest.getrestaurants().subscribe(res => {
      this.rest = res;
    });
  }

}
