function solution(str) {
   // return [...new Set(str)].join("")
    return [...str].filter((v, idx) => str.indexOf(v) === idx).join("");
}