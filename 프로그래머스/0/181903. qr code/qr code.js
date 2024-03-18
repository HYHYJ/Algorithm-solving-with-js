function solution(q, r, code) {
    var answer = '';
    [...code].map((a,i)=> i%q===r?answer+=a:answer);
    return answer;
}

console.log(solution(3,1,"qjnwezgrpirldywt")) 