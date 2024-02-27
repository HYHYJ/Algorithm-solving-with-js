function solution(str, indic) {
    let string = [...str]
    for(let i of indic) string[i] = ""
    return string.join('');
}