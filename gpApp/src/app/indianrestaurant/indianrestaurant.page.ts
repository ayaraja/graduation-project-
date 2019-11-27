import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indianrestaurant',
  templateUrl: './indianrestaurant.page.html',
  styleUrls: ['./indianrestaurant.page.scss'],
})
export class IndianrestaurantPage implements OnInit {

  jsonData: any=[];
  json2Data: any=[];
  json3Data: any=[];
  json4Data: any=[];
  json5Data: any=[];
  json6Data: any=[];
  json7Data: any=[];

  constructor() {
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

  }


  initializeJSONData(){
    this.jsonData =  [
      {
        "name": "مطعم الصيف الهندي ",
        "code": " الص اله "
      },
    ]
    this.json2Data =  [
      {
        "name": "مطعم كوبر شندني ",
        "code": "كو شن "
      },
    ]
    this.json3Data =  [
      {
        "name": "مطعم زعفران",
        "code": "زع"
      },
    ]
    this.json4Data =  [
      {
        "name": "مطعم قصر الهند",
        "code": "قص اله"
      },
    ]
    this.json5Data =  [
      {
        "name": "مطعم ريد تشيلي",
        "code": "ري تش"
      },
    ]
    this.json6Data =  [
      {
        "name": "مطعم ميراج ",
        "code": "مي"
      },
    ]
    this.json7Data =  [
      {
        "name": "مطعم شيزان الهندي",
        "code": "شي اله"
      },
    ]

  }


  ngOnInit() {
  }

}
