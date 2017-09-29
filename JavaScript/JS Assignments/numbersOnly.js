var shorterArray = [];
function numbersOnly(arr){
    for(var i=0; i<arr.length; i++){
        if(typeof arr[i]==="number"){
            shorterArray.push(i);
        }
    }
}
var arr=[1,"apple", -3, "orange", 0.5];
console.log(arr);
numbersOnly(arr);
console.log(shorterArray); 