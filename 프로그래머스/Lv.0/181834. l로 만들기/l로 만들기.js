function solution(str) {
    var answer = '';
    str.split('').map((i)=>([i,"l"]).sort()).map((i) => answer += i[1])
    return answer;
}