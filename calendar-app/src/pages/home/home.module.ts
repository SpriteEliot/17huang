import { NgModule } from '@angular/core';
import { HomePage} from '../home/home';
import { IonicPageModule } from 'ionic-angular';
import {calendar} from '../calendarIonic/calendar';

@NgModule({
  declarations: [HomePage,calendar],
  imports: [IonicPageModule.forChild(HomePage)],
})
export class HomePageModule { }