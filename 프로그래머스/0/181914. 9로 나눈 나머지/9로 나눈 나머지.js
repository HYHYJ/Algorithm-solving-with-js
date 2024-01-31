function solution(num) {
    let answer = 0
    let result = [...num].map((i)=> answer += (+i)) 
    return answer%9
}