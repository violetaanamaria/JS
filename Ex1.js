let a = 4
let b = 7
let c = 9

if(a>b){
    if(a>c){
        console.log(a)
    }
} else if (b>a) {
    if(b>c){
        console.log(b)
    }
}else if(a==b){
    if(b==c) {
        console.log("Toate numerele sunt egale:",a)
    }else {console.log(a)}
} 

else {
    console.log(c)
}
