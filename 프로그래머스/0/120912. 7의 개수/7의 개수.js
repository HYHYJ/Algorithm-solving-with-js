function solution(array) {
    var answer = 0
    array.join("").split("").map((i)=> {if(i === "7") {return answer++}})
    return answer
}