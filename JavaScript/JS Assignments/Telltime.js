var hour = 2;
var minute = 10;
var period = "PM";
var afteralmost="";
var morningnight="";

if(minute<30)
    {
        afteralmost="just after";
    }
else if(minute>30)
    {
        afteralmost="almost";
        hour++;
    }
if(period==="PM")
    {
        morningnight="in the evening";
    }
else if (period==="AM")
{ 
    morningnight = "in the morning";
}
        
console.log("It's", afteralmost, hour, morningnight);
    