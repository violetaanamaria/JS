let l = [2,4,9,6,60]


let m = (arg1) => {
    let n =[]
    for (var i = 0; i<arg1.length; i++){
    n.push(arg1[i]*2)

    }
    console.log("lambda")
    return n;}

console.log(m(l))

export default {l, m};