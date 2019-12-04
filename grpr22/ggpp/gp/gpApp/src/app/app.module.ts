import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {PostProvider} from '../app/providers/post_providers';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import {HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/Storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {File} from'@ionic-native/file/ngx';
import {SocialSharing} from'@ionic-native/social-sharing/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
@NgModule({
  declarations: [AppComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule,HttpModule,     IonicStorageModule.forRoot() 
    ,IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserModule,
     HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
    File,
    SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
