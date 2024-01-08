function solution(nl) {
    let even = [];
    let odd = [];
    nl.map((i, index)=> index%2 === 0 ? even.push(i): odd.push(i))
    let addEven = even.reduce((acc, i)=>acc + i,0)
    let addOdd = odd.reduce((acc, i)=>acc + i,0)
    return addEven >= addOdd ?  addEven :  addOdd 
    
}