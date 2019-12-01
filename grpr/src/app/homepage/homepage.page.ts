import { Component, OnInit } from '@angular/core';
import {PostProvider} from '../providers/post_providers';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';

import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  jsonData: any=[];
  json2Data: any=[];
  json3Data: any=[];
  json4Data: any=[];
  json5Data: any=[];
  json6Data: any=[];
  json7Data: any=[];

  name_customer:string="";
  anggota: any;
    customers: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  constructor(private post:PostProvider, 
    private router:Router,
    public toastCtrl: ToastController,
    private storage: Storage,
    public afAuth: AngularFireAuth) {

    this.initializeJSONData();

    // get the user id from the database for one who signed in 
    this.afAuth.authState.subscribe(user => {
        console.log(user.uid);
    });
  }
  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      // this.anggota = res;
      // this.name_customer = res.name_customer;
      console.log(res);
    });

   this.customers = [];
   this.start = 0;
   this.loadCustomer();
  }
  loadCustomer(){
   return new Promise(resolve => {
    let body = {
     aksi : 'getdata',
     limit : this.limit,
     start : this.start,
    };

    this.post.postDate(body, 'prosess_api.php').subscribe(data => {
     for(let customer of data.result){
      this.customers.push(customer);
     }
     resolve(true);
    });
   });
  }

  FilterJSONData(ev:any){
    this.initializeJSONData();
    const val = ev.target.value;
    if(val && val.trim() !=''){
      this.jsonData = this.jsonData.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
      this.json2Data = this.json2Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
      this.json3Data = this.json3Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
      this.json4Data = this.json4Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
      this.json5Data = this.json5Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
      this.json6Data = this.json6Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
      this.json7Data = this.json7Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
  }


  initializeJSONData(){
    this.jsonData =  [
      {
        "name": "فعاليات",
        "code": "فع"
      },
    ]
    this.json2Data =  [
      {
        "name": "مطاعم",
        "code": "مط"
      },
    ]
    this.json3Data =  [
      {
        "name": "مقاهي",
        "code": "مق"
      },
    ]
    this.json4Data =  [
      {
        "name": "فنادق",
        "code": "فن"
      },
    ]
    this.json5Data =  [
      {
        "name": "شاليهات",
        "code": "شال"
      },
    ]
    this.json6Data =  [
      {
        "name": "مراكز  تجارية  وتسوق",
        "code": "مر تج تس"
      },
    ]
    this.json7Data =  [
      {
        "name": "نوادي رياضية",
        "code": " نو ري"
      },
    ]
  }



  ngOnInit() {
  }

}