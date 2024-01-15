function solution(age) {
    let alp= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    return String(age).split("").map((i)=>alp[i]).join("")
}