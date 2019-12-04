import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlsayfalhendirestPage } from './alsayfalhendirest.page';

const routes: Routes = [
  {
    path: '',
    component: AlsayfalhendirestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlsayfalhendirestPage]
})
export class AlsayfalhendirestPageModule {}
