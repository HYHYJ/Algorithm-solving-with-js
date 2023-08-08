function solution(list) {
   let result=''
   let even = list.filter((item)=>
        item%2===0
    );
    let odd = list.filter((item)=>
        item%2!==0
    );
    var evenArr = even.map(String);
    var oddArr = odd.map(String);
    // for(let i=0; i < even.length; i++){
    //     result= result + even
    // }
    evenArr = evenArr.reduce((acc,i)=>acc+i)
    oddArr = oddArr.reduce((acc,i)=>acc+i)
    return +evenArr + +oddArr
}