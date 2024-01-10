function solution(numbers) {
    numbers.sort(function(a, b)  {
        return b - a;
    });
  let plus =numbers[0]*numbers[1]
  let minus =numbers[numbers.length-1]*numbers[numbers.length-2]
  return plus > minus ? plus : minus
}