function solution(num, n) {
    var answer = 0;
    
    num.forEach((item)=>{
        if(answer <= n){
            answer += item
            return answer
        }
    })
    
    return answer
}

