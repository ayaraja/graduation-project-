import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { Malls,MallsService } from './../services/malls.service';

@Component({
  selector: 'app-vmlist',
  templateUrl: './vmlist.page.html',
  styleUrls: ['./vmlist.page.scss'],
})
export class VmlistPage implements OnInit {
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
