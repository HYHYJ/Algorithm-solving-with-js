function solution(list) {
    var answer = 0;
    let arr =  list.filter((item) => item < 0)
    answer = list.indexOf(arr[0])
    return answer; 
}