import { Component, OnInit } from '@angular/core';
import { Malls,MallsService } from './../services/malls.service';
import { ActivatedRoute ,NavigationExtras} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mallshow',
  templateUrl: './mallshow.page.html',
  styleUrls: ['./mallshow.page.scss'],
})
export class MallshowPage implements OnInit {

  mall: Malls = {
    name:'',  
  Time_start:'',
  Time_end:'',}
  malls: Malls[];
  mallId = null;
  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: MallsService,
     private loadingController: LoadingController,public router:Router) { }

  ngOnInit() {
    this.mallId = this.route.snapshot.params['id'];
    if (this.mallId)  {
      this.loadTodo();
    }
  }
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.getrest.getmall(this.mallId).subscribe(res => {
      loading.dismiss();
      this.mall = res;
    });
  }
  
  open(){
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.mallId)
      }
    };
    this.router.navigate(['comments'], navigationExtras); 
  }

  }


