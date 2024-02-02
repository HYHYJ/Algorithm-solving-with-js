function solution(a, b) {
    return String(a) + String(b) >= a * b * 2 ? +(String(a) + String(b)): a * b * 2
}