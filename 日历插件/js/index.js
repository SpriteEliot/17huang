var calendarDiv = document.getElementById('calendar');
var state = true;
var dounbleSate=true;
var today = new Date(),
    year = today.getFullYear(), //获取日期中的年份
    month = today.getMonth(), //获取日期中的月份(需要注意的是：月份是从0开始计算，获取的值比正常月份的值少1)
    day = today.getDate(); //获取日期中的日(方便在建立日期表格时高亮显示当天)
//判断当前年份是否是闰年(闰年2月份有29天，平年2月份只有28天)
function isLeap(year) {
    return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
}

function calendar(y, m, d) {
    this.y = y;
    this.m = m;
    this.d = d;
}
calendar.prototype.init = function () {
    var i, k,
        //获取当前日期
        firstday = new Date(this.y, this.m, 1), //获取当月的第一天
        dayOfWeek = firstday.getDay(), //判断第一天是星期几(返回[0-6]中的一个，0代表星期天，1代表星期一，以此类推)
        days_per_month = new Array(31, 28 + isLeap(this.y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), //创建月份数组
        str_nums = Math.ceil((dayOfWeek + days_per_month[this.m]) / 7);
    var calContent = "<table id='calendar-table' cellspacing='0' ><tr><th>Sun.</th><th>Mon.</th><th>Tue.</th><th>Wed.</th><th>Thu.</th><th>Fri.</th><th>Sat.</th></tr>";
    for (i = 0; i < str_nums; i += 1) { //二维数组创建日期表格
        calContent += '<tr>';
        for (k = 0; k < 7; k++) {
            var idx = 7 * i + k;
            var date = idx - dayOfWeek + 1;
            (date <= 0 || date > days_per_month[this.m]) ? date = '&nbsp;': date = idx - dayOfWeek + 1;
            date == this.d ? calContent += '<td><span  class="today">' + date + '</span></td>' : calContent += '<td><span>' + date + '</span></td>';
        }
        calContent += '</tr>';
    }
    calendarDiv.innerHTML = calContent;
}




function tdEvent(element) {
    for (var y = 0; y < element.length; y++) {
        element[y].onclick = function () {
            for (var y = 0; y < element.length; y++) {
                element[y].className = '';
            }
            this.className = 'today';
            console.log(this.innerHTML); //日期值
        }
    }
}



window.onload = function () {
    var cal = new calendar(year,month, day);/*月份是从0开始获取，所以在输入月份数字时需减1，如0对应一月，1对应2月*/ 
    cal.init();
    var calTal = document.getElementById('calendar-table');
    $('.arrow').click(function () {
        for (var i = 1; i < calTal.rows.length; i++) {
            if (calTal.rows[i].querySelector('.today')) {
                continue;
            }
            if (state) {
                calTal.rows[i].style.display = 'none';
            } else {
                calTal.rows[i].style.display = 'table-row';
            }

        }
        state = !state;
    });
    console.log(calTal.querySelectorAll('span.today'));
    var td = calTal.querySelectorAll('span');
    tdEvent(td);

}