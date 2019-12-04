import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationExtras } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { event,EventsService } from './../services/Events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veshow',
  templateUrl: './veshow.page.html',
  styleUrls: ['./veshow.page.scss'],
})
export class VeshowPage implements OnInit {
  event:event={
    name:'',
    Type:'',
    vistor_Type:'',
    vistor_Type1:'',
  Date:'',
  Date_end:'',
  Time_start:'',
  Time_end:'',
  
   }
   events: event[];
    eventId = null;
    constructor(private route: ActivatedRoute, private nav: NavController, private getrest: EventsService,
       private loadingController: LoadingController,public router:Router) { }
  
    ngOnInit() {
      this.eventId = this.route.snapshot.params['id'];
      if (this.eventId)  {
        this.loadTodo();
  
    }
  
  }
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
  
    this.getrest.getevent(this.eventId).subscribe(res => {
      loading.dismiss();
      this.event = res;
    });
  }
  
 
  test(url){
    window.open(url,'_system', 'location=yes');
  }
  }
