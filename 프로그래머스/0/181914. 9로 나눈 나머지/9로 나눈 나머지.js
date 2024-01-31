function solution(num) {
    let ans = 0
    let dd = [...num].map((i)=>+i).map((i)=> ans += i)  
    return ans%9
}