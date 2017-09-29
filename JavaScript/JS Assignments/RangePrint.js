function PrintRange(startpoint, endpoint, skipamount){
    for(var i=startpoint; i<=endpoint; i=i+skipamount)
        {
            console.log(i);
        }
}
PrintRange(2, 10, 2);