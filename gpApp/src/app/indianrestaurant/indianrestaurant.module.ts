import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndianrestaurantPage } from './indianrestaurant.page';

const routes: Routes = [
  {
    path: '',
    component: IndianrestaurantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndianrestaurantPage]
})
export class IndianrestaurantPageModule {}
