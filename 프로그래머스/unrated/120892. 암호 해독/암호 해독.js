function solution(cipher, code) {
    let answerlist = cipher.split("").filter((i, index)=> (index + 1)%(code) == 0  ).join('')
    return answerlist;
}