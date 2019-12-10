import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  [x: string]: any;

  price: any = '';

  constructor(private route: ActivatedRoute) {
    this.price = this.route.snapshot.params['price'];
    this.fcm.subscribeToTopic('people');
    this.fcm.unsubscribeFromTopic('marketing');
  }


  
  ngOnInit() {
  }

}
