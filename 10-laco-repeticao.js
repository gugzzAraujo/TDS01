// enquanto = while

var i = 0;

    while(i<=10){
        console.log(i)
        i++ //
    }


// para = for
 
for(i = 0;i<=10;i++){
    console.log(i)
}


// faca enquanto = do while

i = 0;

do{
    console.log(i)
    i++
}while(i <= 10)

//forEach

var array = [0,1,2,3,4,5,6,7,8,9,10];

array.forEach(function(element){
    console.log(element);
});

array.forEach(element =>{
    console.log(element);
})