function solution(strArr) {
  const g = new Map();
  strArr
    .map((s) => s.length)
    .forEach((i) => (g.has(i) ? g.set(i, g.get(i) + 1) : g.set(i, 1)));
  return [...g.values()].reduce((a, i) => Math.max(a, i), 0);
}