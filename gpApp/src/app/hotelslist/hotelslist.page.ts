import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotelslist',
  templateUrl: './hotelslist.page.html',
  styleUrls: ['./hotelslist.page.scss'],
})
export class HotelslistPage implements OnInit {

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
        "name": "هيلتون الرياض",
        "code": "هل"
      },
    ]
    this.json2Data =  [
      {
        "name": "شذا الرياض ",
        "code": "شذ "
      },
    ]
    this.json3Data =  [
      {
        "name": "كراون بلازا ",
        "code": "كر بلا"
      },
    ]
    this.json4Data =  [
      {
        "name": "جراند بلازا الضباب",
        "code": "جرا"
      },
    ]
    this.json5Data =  [
      {
        "name": "فندق الفورسيزونز",
        "code": "فور"
      },
    ]
    this.json6Data =  [
      {
        "name": "فندق اوليان",
        "code": "اول"
      },
    ]
    this.json7Data =  [
      {
        "name": "بلازا ان الرياض ",
        "code": "بلز"
      },
    ]

  }

  ngOnInit() {
  }

}
