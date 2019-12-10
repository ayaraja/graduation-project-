import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { event, EventsService } from './../services/Events.service';
@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.page.html',
  styleUrls: ['./eventdetail.page.scss'],
})
export class EventdetailPage implements OnInit {

  jsonData: any = [];
  json2Data: any = [];
  json3Data: any = [];
  json4Data: any = [];
  json5Data: any = [];
  json6Data: any = [];
  json7Data: any = [];
  json8Data: any = [];
  json9Data: any = [];
  json10Data: any = [];
  json11Data: any = [];
  json12Data: any = [];

  event: event[];
  constructor(private route: ActivatedRoute, private nav: NavController, private getrest: EventsService, private loadingController: LoadingController) {
    this.initializeJSONData();
  }


  FilterJSONData(ev: any) {
    this.initializeJSONData();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.jsonData = this.jsonData.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json2Data = this.json2Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json3Data = this.json3Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json4Data = this.json4Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json5Data = this.json5Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json6Data = this.json6Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json7Data = this.json7Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json8Data = this.json8Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json9Data = this.json9Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json10Data = this.json10Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json11Data = this.json11Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    if (val && val.trim() != '') {
      this.json12Data = this.json12Data.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }

  }


  initializeJSONData() {
    this.jsonData = [
      {
        "name": "الرياض بوليفارد",
        "code": "بول"
      },
    ]
    this.json2Data = [
      {
        "name": "واجهة الرياض",
        "code": "وا"
      },
    ]
    this.json3Data = [
      {
        "name": "معرض الرياض للسيارات",
        "code": "سي"
      },
    ]
    this.json4Data = [
      {
        "name": "رياض ونتر وندرلاند",
        "code": "وند"
      },
    ]
    this.json5Data = [
      {
        "name": "ملاعب الرياض",
        "code": "مل"
      },
    ]
    this.json6Data = [
      {
        "name": "الحي الدبلوماسي",
        "code": "دبل"
      },
    ]
    this.json7Data = [
      {
        "name": "المربع",
        "code": "مر"
      },
    ]
    this.json8Data = [
      {
        "name": "الملز",
        "code": "ملز"
      },
    ]
    this.json9Data = [
      {
        "name": "وادي نمار",
        "code": "وا نم"
      },
    ]
    this.json10Data = [
      {
        "name": "نبض الرياض",
        "code": "نب"
      },
    ]

    this.json11Data = [
      {
        "name": "رياض سفاري",
        "code": "سف"
      },
    ]

    this.json12Data = [
      {
        "name": "صحارى الرياض",
        "code": "صح"
      },
    ]

  }


  ngOnInit() {
    this.getrest.getevents().subscribe(res => {
      this.event = res;
    });

  }

}
