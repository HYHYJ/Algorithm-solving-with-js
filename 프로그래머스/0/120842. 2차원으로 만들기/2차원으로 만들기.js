function solution(list, n) {
    var answer = [];
    for(let i = 0; i < list.length / n ; i++){
     answer.push(list.slice(i * n,i * n + n))   
    }
    
    return answer;
}