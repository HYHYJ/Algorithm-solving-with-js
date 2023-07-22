function solution(n, k) {
    var answer = [];
    for(let i = 1; i <= n; i++){
    a = k*i
    if(a <= n){   
        answer.push(a)
    }
}
    return answer;
}