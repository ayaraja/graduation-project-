import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Malls,MallsService } from './../services/malls.service';



@Component({
  selector: 'app-malls',
  templateUrl: './malls.page.html',
  styleUrls: ['./malls.page.scss'],
})
export class MallsPage implements OnInit {

  mall: Malls[];
mallid=null;
  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: MallsService, private loadingController: LoadingController) { 
    this.mallid = this.route.snapshot.params['id'];

  }
  ngOnInit() {
    this.getrest.getmalls().subscribe(res => {
      this.mall = res;
    });

  }


}

