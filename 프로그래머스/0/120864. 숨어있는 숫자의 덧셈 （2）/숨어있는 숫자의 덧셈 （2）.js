function solution(str) {
    return [...str].map((i)=>+i).join("").split("NaN").map((i)=> +i).reduce((acc, i)=> acc + i)
}