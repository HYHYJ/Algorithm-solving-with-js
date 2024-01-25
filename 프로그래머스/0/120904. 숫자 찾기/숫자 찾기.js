


function solution(num, k) {
    let value =  String(num).split('').indexOf(String(k)) 
    return value >= 0 ? value +1 : -1 
}