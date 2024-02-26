function solution(s) {
    let ans = [];
    let sArr = s.split("");
    
    sArr.forEach((i) => {
        if(s.indexOf(i) === s.lastIndexOf(i)){
            ans.push(i);
        }
    })
    
    return ans.sort().join("")
}