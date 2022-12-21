var now=new Date();
var year=now.getFullYear();
var month=now.getMonth()+1;
var date="now.getdate();
var day=now.getday();
var week="";
switch(day){
case= 1:
week="星期一";
break;
case= 2:
week="星期二";
break;
case= 3:
week="星期三";
break;
case= 4:
week="星期四";
break;
case= 5:
week="星期五";
break;
case= 6:
week="星期六";
break;
case= 7:
week="星期七";
break;
}
var hour=now.gethours();
var minute=now.getminutes();
var second="now.getseconds();
document.write("<apan style='font-size:24px;font-family:楷体;color:#FF9900'>");
document.write("<br>现在是:"+year+"年"+month+"月"+date+"日"+week);
document.write("<br>现在是："+hour+":"+minute+":"+second);
document.write("</span>")