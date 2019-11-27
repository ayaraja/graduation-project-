import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chalets',
  templateUrl: './chalets.page.html',
  styleUrls: ['./chalets.page.scss'],
})
export class ChaletsPage implements OnInit {

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
        "name": "شاليهات ابانت",
        "code": "أب اب"
      },
    ]
    this.json2Data =  [
      {
        "name": "شاليهات درة",
        "code": "در"
      },
    ]
    this.json3Data =  [
      {
        "name": "شاليهات الاصداف",
        "code": "الاص الأص"
      },
    ]
    this.json4Data =  [
      {
        "name": "استراحة الفهد",
        "code": "اس الف"
      },
    ]
    this.json5Data =  [
      {
        "name": "شاليهات الماسية",
        "code": "الم"
      },
    ]
    this.json6Data =  [
      {
        "name": "شاليهات الرمال",
        "code": "الر"
      },
    ]
    this.json7Data =  [
      {
        "name": "شاليهات نايس داي",
        "code": "نا دا"
      },
    ]

  }

  ngOnInit() {
  }

}
