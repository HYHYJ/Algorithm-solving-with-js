function solution(arr) {
    var answer = 0;
    arr.sort((a,b) => a-b); 
    answer = arr[Math.floor(arr.length / 2)]
    return answer
}