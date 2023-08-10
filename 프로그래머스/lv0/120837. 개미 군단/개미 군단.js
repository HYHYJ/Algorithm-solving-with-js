function solution(hp) {

    let l = 5;
    let m = 3;
    let s = 1;
    l = Math.floor(hp/l)
    m = Math.floor((hp - l * 5) / 3);
    s = hp - l * 5 - m * 3;
    return l + m +s;
  
}