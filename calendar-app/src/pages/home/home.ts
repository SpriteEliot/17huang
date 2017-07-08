import {
  Component
} from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import {
  NavController
} from 'ionic-angular';

import {
  calendar
} from '../calendarIonic/calendar';

import { IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  calendar=calendar;

  calState: boolean = true;
  calState1: boolean = false;
  calState2: boolean = false;


  tableData = [{
    name: '项目一（写具体名称）',
    number: '1',
    num: '10',
    tips: '定价依据和客户判定',
    state: '类型修改'
  }, {
    name: '项目一（写具体名称）',
    number: '1',
    num: '10',
    tips: '定价依据和客户判定',
    state: '类型修改'
  }, {
    name: '项目一（写具体名称）',
    number: '1',
    num: '10',
    tips: '定价依据和客户判定',
    state: '类型修改'
  }, {
    name: '项目一（写具体名称）',
    number: '1',
    num: '10',
    tips: '定价依据和客户判定',
    state: '类型修改'
  }, {
    name: '项目一（写具体名称）',
    number: '1',
    num: '10',
    tips: '定价依据和客户判定',
    state: '类型修改'
  }];

  changeState() {
   this.calState1=! this.calState1

  }
 changeState2() {
   this.calState2=! this.calState2

  }
bindClass(event){
  console.log(event);
  event.className='today';
}
delte(){
  
}
calSlide(celment){
 let calState: boolean = true;
var arrow= document.getElementById('arrow');
  arrow.onclick=function () {
        for (var i = 1; i < celment.rows.length; i++) {
            if (celment.rows[i].querySelector('.today')) {
                continue;
            }
            if (calState) {
                celment.rows[i].style.display = 'none';
            } else {
                celment.rows[i].style.display = 'table-row';
            }

        }
       calState = !calState;
    }
}
    

 
  constructor( public navCtrl: NavController) {


  }
 

ngAfterViewInit(){
  /*dom 操作 */
/*var calTal = document.getElementById('calendar');
var table=calTal.querySelector('table');
  var  span=document.getElementsByClassName('span');*/

 /* this.calSlide(table);*/

}
}
