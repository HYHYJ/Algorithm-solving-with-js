function solution(intStrs, k, s, l) {
    var answer = [];
    return intStrs.map((i)=> Number(i.substr(s,l))).filter((i)=> i > k)
}