function solution(n) {
    var answer = [];
    let a = 0;
    for(let i = 1 ; i <= n ; i++ ){
    if (n % i == 0) {
      answer.push(i)
    }
    }
    
    return answer=answer.length;
}