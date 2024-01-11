function solution(str, p) {
    return str.map((i, ind)=>i.slice(p[ind][0], p[ind][1]+1)).join("")  
}