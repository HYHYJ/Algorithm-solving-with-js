function solution(order) {
    var answer = 0;
    for(let i of String(order)){
        if(i%3==0 && i !=="0"){
        answer++
      }
    }
    return answer;
}