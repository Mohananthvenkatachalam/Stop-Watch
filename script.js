let min=document.getElementById("min")
let sec=document.getElementById("sec");
let mil=document.getElementById("milli");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let sec1=0;
let mil1=0;
let min1=0
let interval;
function starttime()
{
    mil1++;
    if(mil1<10)
    {
        mil.innerHTML="0"+mil1;
    }
    if(mil1>9)
    {
        mil.innerHTML=mil1;
    }
    if(mil1>99)
    {
        sec1++;
        sec.innerHTML="0"+sec1;
        mil1=0;
        mil.innerHTML="0"+0;
        if(sec1>9)
        {
            sec.innerHTML=sec1;
        }
        if(sec1>59)
        {
            min1++;
            min.innerHTML="0"+min1
            sec1=0;
            sec.innerHTML="0"+0
            if(min1>9)
            {
                min.innerHTML=min1
            }
        }
    }
}
start.onclick =function(){
    interval=setInterval(starttime)
}
stop.onclick=function(){
    clearInterval(interval)
}
reset.onclick=function(){
    clearInterval(interval)
    mil1="00"
    sec1="00"
    min1="00"
    mil.innerHTML=mil1;
    sec.innerHTML=sec1;
    min.innerHTML=min1;
}