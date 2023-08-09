function solution(arr) {
    var answer = [];
    for(item of arr){
        for(let i=0; i < item; i++){
        answer.push(item)
        }
    }
    
    return answer ;
}