function solution(array) {
    var answer = 0;
    array.map((i)=> String(i).split('')).map((i)=>{i.map((j)=>{
        if(j === "7") answer++
    })})
    return answer;
}