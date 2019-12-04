import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newevents',
  templateUrl: './newevents.page.html',
  styleUrls: ['./newevents.page.scss'],
})
export class NeweventsPage implements OnInit {

  jsonData: any=[];

  constructor( public alertCtrl : AlertController) {
    this.initializeJSONData();
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Event Date',
      message: ' From 11 Oct to 15 Dec - 2019',
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }


  FilterJSONData(ev:any){
    this.initializeJSONData();
    const val = ev.target.value;
    if(val && val.trim() !=''){
      this.jsonData = this.jsonData.filter((item: { name: { toLowerCase: () => { indexOf: (arg0: any) => number; }; }; }) =>{
        return( item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
  }


  initializeJSONData(){
    this.jsonData =  [
      {
        "name": "موسم الرياض",
        "code": "مو الر"
      },
    ]

  }

  ngOnInit() {
  }

}
