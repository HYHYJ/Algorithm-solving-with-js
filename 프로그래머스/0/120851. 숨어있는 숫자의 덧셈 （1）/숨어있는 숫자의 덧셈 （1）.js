function solution(str) {
    return [...str].map((i)=> +i).filter((i)=> i).reduce((acc, i)=>acc+i, 0)
}
  
    
    // answer = str.split('')
    // for (key of answer){
    //     if(typeof key !=='number'){
    //         answer.push(key)
    //     }
    // }
    
