import { Component, OnInit } from '@angular/core';
import { restaurants,RestaurantsService } from './../services/restaurants.service';
import { ActivatedRoute,NavigationExtras } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vrshow',
  templateUrl: './vrshow.page.html',
  styleUrls: ['./vrshow.page.scss'],
})
export class VrshowPage implements OnInit {
  rest:restaurants={
    name:'',
    type_place:'',
    type_j:'',
    type_cat:'',
    vistor_Type:'',
  Date:'',
  Time_start:'',
  Time_end:'',
  cost:'',
  number_vist:0,
  rate:1,
  }
  restus: restaurants[];
  restId = null;
  data: any;
  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: RestaurantsService, 
    private loadingController: LoadingController,public router:Router) {
      this.route.queryParams.subscribe(params => {
          this.restId = this.route.snapshot.params['id'];
  
      if (params && params.special) {
        this.data = JSON.parse(params.special);
  
      }
  
  
    }); }

  ngOnInit() {
  }
  open(){
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.data.id)
      }
    };
    this.router.navigate(['comments'], navigationExtras); 
  }
  test(url){
    window.open(url,'_system', 'location=yes');
  }
  map(map){
    window.open(map,'_system', 'location=yes');

  }
  async likeButtonClick(rate,id) {

    const loading=await this.loadingController.create({
      message:''
     });
  await loading.present();
    
  if (this.data.id) {
    this.rest.rate++;
    this.getrest.updateactivity(this.rest, this.data.id).then(() => {
      loading.dismiss();
    });
  }else{
  
  
  }
}
}
