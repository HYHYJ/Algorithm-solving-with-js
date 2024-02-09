function solution(before, after) {
    before = [...before].sort()
    after = [...after].sort()
    return before.filter((i,idx) => i === after[idx]).length === after.length ? 1 : 0
}