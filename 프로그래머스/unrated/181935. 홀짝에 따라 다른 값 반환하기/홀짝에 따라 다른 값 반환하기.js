function solution(n) {
    var answer = 0;
    if(n%2!=0){ 
        for(var i = 1; i <= n; i+=2) 
            answer += i;
    }else{ 
        for(var i = 2; i <= n; i+=2) 
            answer += Math.pow(i,2);
    }
    return answer;
}
