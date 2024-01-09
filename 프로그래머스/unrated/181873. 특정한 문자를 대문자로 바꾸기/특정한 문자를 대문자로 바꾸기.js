function solution(str, alp) {
    var answer = '';
    str = str.split('')
    answer = str.map((v)=>{
     return v ===alp? v.toUpperCase() : v  
    }).join("")
            
    return answer;
}