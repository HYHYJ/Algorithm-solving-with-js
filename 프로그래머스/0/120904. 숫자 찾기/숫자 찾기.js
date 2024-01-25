


function solution(num, k) {
    let stringK = String(k)
    let value =  String(num).split('')
    value = value.indexOf(stringK)
    return value >= 0 ? value +1 : -1 
}