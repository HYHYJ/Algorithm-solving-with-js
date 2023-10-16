function solution(str) {
    
    
    let answer = str.split("").map((i)=> parseInt(i)).filter((i) => Number(i) || i === 0 ).sort()
    return answer;
}