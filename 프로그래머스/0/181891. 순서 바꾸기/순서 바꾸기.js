function solution(li, n) {
    return [...li.slice(n), ...li.slice(0, n)]
}