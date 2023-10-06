function solution(box, n) {
    var answer = 0;
    box = box.map((i)=> parseInt(i/n) )
    return box.reduce((acc, cur)=> acc * cur, 1)
}