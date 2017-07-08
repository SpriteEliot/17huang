import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';




@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html',
})
export class calendar {
  slideOption = {
    loop: true
  };
  currentSlide = 0;
  nowDate: string;
  events = new Array < any > ();
  month: Array < any > ;
  current: Date;
  today: Date;
  show:boolean = false;
  stateArr:Boolean[]=[false,false,false,false,false,true];
  wHeadShort: string[] = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  wHeadMed: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  previousDay: any;
  selectedDay: any;
  constructor() {
    var today = new Date(),
      year = today.getFullYear(), //获取日期中的年份
      month = today.getMonth(), //获取日期中的月份(需要注意的是：月份是从0开始计算，获取的值比正常月份的值少1)
      day = today.getDate(),nowMonth=month+1;
    this.nowDate = year+'-'+nowMonth+'-'+day;
    this.today = new Date();
    this.current = new Date();
    this.current.setTime(this.today.getTime());
    this.monthRender(this.today.toISOString());

  }

  isToday(day) {
    if (this.today.getDate() === day.day.getDate() && this.today.getMonth() === day.day.getMonth()) {
      return true;
    } else {
      return false;
    }
  }
  diffMonth(day) {
    if (this.current.getMonth() !== day.day.getMonth()) {
      return true;
    } else {
      return false;
    }
  }
  toDate(day) {
    return day.day.getDate();
  }
    toMonth(day) {
    return day.day.getMonth()+1;
  }
    toYear(day) {
    return day.day.getFullYear();
  }
  ngOnChanges() {

    this.monthRender(this.today.toISOString());
  }
  monthRender(date: string) {
    var month = new Array();
    var firstDay = new Date(date);
    firstDay.setDate(1);
    var firstDayNextMonth = new Date(date);
    if (firstDay.getMonth() < 11) {
      firstDayNextMonth.setMonth(firstDay.getMonth() + 1);
      firstDayNextMonth.setDate(1);
    } else {
      firstDayNextMonth.setMonth(1);
      firstDayNextMonth.setDate(1);
    }
    var lastDay = new Date(date);
    lastDay.setTime(firstDayNextMonth.getTime() - (1 * 24 * 3600000));
    var iw = firstDay.getDay();
    var dayCount = 0;
    // build week in month
    for (let i = 0; i <= 5; i++) {
      var weekDay = new Array();
      for (var j = 0; j <= 6; j++) {
        if (i === 0 && j < iw) {
          // previous month date
          var day = new Date();
          day.setTime(firstDay.getTime() - ((iw - j) * 24 * 3600000));
          weekDay.push({
            day: day
          });
        } else {
          if (dayCount < lastDay.getDate()) {
            var day = new Date();
            day.setTime(firstDay.getTime() + (dayCount * 24 * 3600000));
            let oEvents: any;
            if (this.events) {
              oEvents = this.events.filter(event => {
                let eventDate = new Date(event.start);

                return eventDate.getDate() === day.getDate() &&
                  eventDate.getMonth() === day.getMonth() &&
                  eventDate.getFullYear() === day.getFullYear();
              });
            }
            if (this.today.getDate() === day.getDate() && this.today.getMonth() === day.getMonth()) {
              let oDay = {
                day: day,
                events: oEvents,
                selected: true
              };
              weekDay.push(oDay);
              this.selectedDay = oDay;

            } else {
              weekDay.push({
                day: day,
                events: oEvents,
                selected: false
              });
            }
            dayCount++;
          } else {
            // next month date
            dayCount++;
            var day = new Date();
            day.setTime(lastDay.getTime() + ((dayCount - lastDay.getDate()) * 24 * 3600000));
            weekDay.push({
              day: day
            });
          }
        }
      }
      month.push(weekDay);

    }

    this.month = month;

  }
  previousMonth() {
    let previous = new Date();
    let currentMonth = this.current.getMonth();
    if (currentMonth > 1) {
      previous.setMonth(currentMonth - 1);
    } else {
      previous.setMonth(12);
      previous.setFullYear(this.current.getFullYear() - 1);
    }
    this.current = new Date();
    this.current.setTime(previous.getTime());

    this.monthRender(this.current.toISOString());
  }

  nextMonth() {
    let next = new Date();
    let currentMonth = this.current.getMonth();
    if (currentMonth < 11) {
      next.setMonth(currentMonth + 1);
    } else {
      next.setMonth(1);
      next.setFullYear(this.current.getFullYear() + 1);
    }
    this.current = new Date();
    this.current.setTime(next.getTime());
    this.monthRender(this.current.toISOString());
  }

  selectDay(day: any) {
    this.nowDate=this.toYear(day)+'-'+this.toMonth(day)+'-'+this.toDate(day);

    if(!day.selected){
    this.selectedDay.selected = false;
    day.selected = true;
    this.selectedDay = day;

    if (this.previousDay) this.previousDay.selected = false;
    this.previousDay = day;
    }

  }
 delete(arr) {
    let state: boolean;
    if(this.show==true){
      for (var i in arr) {
      if (arr[i].selected) {
        state = false;
        break;
      } else {
        state = true;
      }
    }
    }else{
      state=false
    }
    
    return state;

  }

  switch(){
      this.show=!this.show;
  }
  eventsChange(events) {
    this.events = events;
    this.monthRender(this.today.toISOString());
  }
  /*onSlideChanged() {
      let currentIndex = 0;
      //currentIndex = this.slider.slider.activeIndex;
      if (currentIndex === 0 && this.currentSlide === 1) {
          this.previousMonth();
      } else if (currentIndex === 0 && this.currentSlide === 2) {
          this.nextMonth();
      } else if (currentIndex > this.currentSlide) {
          this.nextMonth();
      } else if (currentIndex < this.currentSlide) {
          this.previousMonth();
      }
  }*/
}
