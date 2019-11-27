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

  jsonData: any=[];
  json2Data: any=[];
  json3Data: any=[];
  json4Data: any=[];
  json5Data: any=[];
  mall: Malls[];

  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: MallsService, private loadingController: LoadingController) { 
    this.initializeJSONData();
  }


  FilterJSONData(ev:any){
    this.initializeJSONData();
    const val = ev.target.value;
    if(val && val.trim() !=''){
      this.jsonData = this.jsonData.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json2Data = this.json2Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json3Data = this.json3Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json4Data = this.json4Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json5Data = this.json5Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }


  }


  initializeJSONData(){
    this.jsonData =  [
      {
        "name": "مولات",
        "code": "مو"
      },
    ]
    this.json2Data =  [
      {
        "name": "مفروشات وادوات منزلية",
        "code": "مف ادو منز"
      },
    ]
    this.json3Data =  [
      {
        "name": "عطور ومستحضرات تجميل",
        "code": "عط تج"
      },
    ]
    this.json4Data =  [
      {
        "name": "المجوهرات والاكسسوارات",
        "code": "مج اكس"
      },
    ]
    this.json5Data =  [
      {
        "name": "الكترونيات",
        "code": "الك"
      },
    ]

  }
  ngOnInit() {
    this.getrest.getmalls().subscribe(res => {
      this.mall = res;
    });

  }

}
