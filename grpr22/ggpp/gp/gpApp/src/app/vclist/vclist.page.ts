import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { cafes,CafesService } from './../services/Cafes.service';
@Component({
  selector: 'app-vclist',
  templateUrl: './vclist.page.html',
  styleUrls: ['./vclist.page.scss'],
})
export class VclistPage implements OnInit {

  cafe:cafes[];
  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: CafesService, private loadingController: LoadingController) { 
  
    }

  ngOnInit() {
    this.getrest.getevents().subscribe(res => {
      this.cafe = res;
    });
  }
}
