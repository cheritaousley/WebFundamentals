function slotMachine(quarters, walkAwayAmount){
    while(quarters >0){
        quarters --;
        var winningNumber =1;
        if(Math.floor(Math.random()*100)=== winningNumber){
            quarters += Math.floor(Math.random()*51+50);
            console.log("the user just won, and now we have" + quarters + "quarters")
        }
        else if(quarters >= walkAwayAmount){
            break;
        }   
    }
   return(quarters);
} var results = slotMachine(200, 250);
    console.log(results);