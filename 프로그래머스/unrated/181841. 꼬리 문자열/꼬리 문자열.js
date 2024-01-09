function solution(sl, ex) {
    var answer = '';
    sl.map((i)=> !i.includes(ex)? answer += i : i)
    
    return answer;
}