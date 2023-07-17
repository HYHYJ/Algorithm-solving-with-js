function solution(s1, s2) {
    var answer = 0;
    s2.forEach((i)=>{
    s1.forEach((item)=>{
        if(item === i){
    return answer++}
    
    })
    })
    return answer;
}