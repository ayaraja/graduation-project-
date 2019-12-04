import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { event,EventsService } from './../services/Events.service';

@Component({
  selector: 'app-velist',
  templateUrl: './velist.page.html',
  styleUrls: ['./velist.page.scss'],
})
export class VelistPage implements OnInit {

  event:event[];
  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: EventsService, private loadingController: LoadingController) { 
    
  }

  ngOnInit() {
    this.getrest.getevents().subscribe(res => {
      this.event = res;
    });
  }

}
