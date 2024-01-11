function solution(arr) {
    let answer = [Math.max(...arr)]
    let [Bignum] = answer
    arr.map((i, ind)=>{
        if(i === Bignum){
            return answer.push(ind)
        }
    })
    return answer;
}