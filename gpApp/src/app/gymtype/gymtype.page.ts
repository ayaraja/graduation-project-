import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gymtype',
  templateUrl: './gymtype.page.html',
  styleUrls: ['./gymtype.page.scss'],
})
export class GymtypePage implements OnInit {

  jsonData: any=[];
  json2Data: any=[];

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


  }


  initializeJSONData(){
    this.jsonData =  [
      {
        "name": "نوادي النساء",
        "code": "نس"
      },
    ]
    this.json2Data =  [
      {
        "name": "نوادي الرجال",
        "code": "رج"
      },
    ]

  }


  ngOnInit() {
  }

}
