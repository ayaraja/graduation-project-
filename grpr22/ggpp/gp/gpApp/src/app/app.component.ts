import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/Storage';

// import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    /*this.storage.get('session_storage').then((res)=>{
      if(res == null){
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/register']);
      }
    });*/

  //   this.fcm.getToken().then(token => {
  //     console.log(token);
  //   });

  //   this.fcm.onTokenRefresh().subscribe(token => {
  //     console.log(token);
  //   });

  //   this.fcm.onNotification().subscribe(data => {
  //     console.log(data);
  //     if (data.wasTapped) {
  //       console.log('Received in background');
  //       this.router.navigate([data.landing_page, data.price]);
  //     } else {
  //       console.log('Received in foreground');
  //       this.router.navigate([data.landing_page, data.price]);
  //     }
  //   });

  // }

  
  }
}
