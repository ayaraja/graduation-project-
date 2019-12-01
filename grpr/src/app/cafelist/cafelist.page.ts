import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { cafes,CafesService } from './../services/Cafes.service';
@Component({
  selector: 'app-cafelist',
  templateUrl: './cafelist.page.html',
  styleUrls: ['./cafelist.page.scss'],
})
export class CafelistPage implements OnInit {

  jsonData: any=[];
  json2Data: any=[];
  json3Data: any=[];
  json4Data: any=[];
  json5Data: any=[];
  json6Data: any=[];
  json7Data: any=[];
  json8Data: any=[];
  json9Data: any=[];
  json10Data: any=[];
  json11Data: any=[];
  json12Data: any=[];
  json13Data: any=[];
  json14Data: any=[];
  json15Data: any=[];
  json16Data: any=[];
  json17Data: any=[];
cafe:cafes[];
constructor(private route: ActivatedRoute, private nav: NavController, private getrest: CafesService, private loadingController: LoadingController) { 
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
    if(val && val.trim() !=''){
      this.json6Data = this.json6Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json7Data = this.json7Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json8Data = this.json8Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json9Data = this.json9Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json10Data = this.json10Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json11Data = this.json11Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }  
    if(val && val.trim() !=''){
      this.json12Data = this.json12Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json13Data = this.json13Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json14Data = this.json14Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }  
    if(val && val.trim() !=''){
      this.json15Data = this.json15Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json16Data = this.json16Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
    if(val && val.trim() !=''){
      this.json17Data = this.json17Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }

  }


  initializeJSONData(){
    this.jsonData =  [
      {
        "name": "مقهى الرغوة البيضاء",
        "code": "مق الر"
      },
    ]
    this.json2Data =  [
      {
        "name": "مقهى كابيو دييم",
        "code": "مق كا دي"
      },
    ]
    this.json3Data =  [
      {
        "name": "ستار بوكس",
        "code": "ست بوك"
      },
    ]
    this.json4Data =  [
      {
        "name": "د.كيف",
        "code": "دك"
      },
    ]
    this.json5Data =  [
      {
        "name": "مقهى الضوء الخافت ",
        "code": "مق الض الخ"
      },
    ]
    this.json6Data =  [
      {
        "name": "مقهى سيجار الفيصيلية",
        "code": "مق سيج الف"
      },
    ]
    this.json7Data =  [
      {
        "name": "كافيه فوشن",
        "code": "كا فو "
      },
    ]
    this.json8Data =  [
      {
        "name": "صدى التحلية",
        "code": "صد الت"
      },
    ]
    this.json9Data =  [
      {
        "name": "كافيه بلان ",
        "code": "كا بلا"
      },
    ]
    this.json10Data =  [
      {
        "name": "وايت قاردن كافيه ",
        "code": "واي قا كا"
      },
    ]

    this.json11Data =  [
      {
        "name": "فلات وايت  ",
        "code": "فلا واي"
      },
    ]

    this.json12Data =  [
      {
        "name": " كاريبو  ",
        "code": " كار "
      },
    ]

    this.json13Data =  [
      {
        "name": " كفالي كافيه ",
        "code": " كف كا "
      },
    ]

    this.json14Data =  [
      {
        "name": " بول ",
        "code": " بو "
      },
    ]

    this.json15Data =  [
      {
        "name": " هاف مليون ",
        "code": " ها مل "
      },
    ]

    this.json16Data =  [
      {
        "name": " جولت ",
        "code": " جو "
      },
    ]

    this.json17Data =  [
      {
        "name": " باستيل كافيه ",
        "code": " با كا "
      },
    ]

  }

  

  ngOnInit() {
    this.getrest.getevents().subscribe(res => {
      this.cafe = res;
    });
  }

}
