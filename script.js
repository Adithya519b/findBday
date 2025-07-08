let bdate=document.getElementById("bdate"); // input date
let bday=document.getElementById("bday");
let find=document.getElementById("find");
let uage=document.getElementById('age'); //button id
let Day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 function findday(){
   let bdatevalue=bdate.value;
    let b_day=new Date(bdatevalue);
   // bday=Day[];
   let bdayname=Day[b_day.getDay()];
    bday.textContent=`${bdayname}`
    console.log(Day[b_day.getDay()])
    let currentyear=new Date().getFullYear();
    let birthyear=b_day.getFullYear();
    let age=currentyear-birthyear;
    uage.textContent=`your are ${age} years old `;
    console.log(currentyear)
 }
find.addEventListener("click",findday)