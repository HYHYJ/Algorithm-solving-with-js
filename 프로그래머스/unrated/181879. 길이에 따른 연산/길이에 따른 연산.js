function solution(num) {
    var answer = 0;
    var a = 1  ;
    num.forEach((i)=>{
        if(num.length >= 11){
            answer += i 
        }else{
           answer = a *= i
        }
    })
    return answer;
}