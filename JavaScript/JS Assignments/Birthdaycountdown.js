var daysUntilMyBirthday = 60;
for (var i=daysUntilMyBirthday; i>=0; i--)
    {
        console.log(i);
        if(i>30)
            {
            console.log("Such a long time :(");
            }
        else if(i<30 && i>5)
            {
            console.log("It's almost time!(:");
            }
        else if(i<5 && i>0)
            {
            console.log( "MY DAY IS NEAR!");
            }
        else if(i===0)
            {
            console.log("HAPPY BIRTHDAY TO ME!!!")
            }
    }