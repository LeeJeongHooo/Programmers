function solution(lines) {
  const lineMax = Math.max(...lines.flat(Infinity));
  const lineMin = Math.min(...lines.flat(Infinity));
  console.log(Array(lineMax - lineMin + 1).fill(0));
}

solution([
  [0, 1],
  [2, 5],
  [1, 9],
]);

// 음수를 고려해야 되기 때문에 아래와 같은 방법이 더 쉬운 방법이 될 수 있다.

function solution(lines) {
  let line = Array(201).fill(0);
  for (let [i, j] of lines) {
    for (; i < j; i++) {
      line[100 + i]++;
    }
  }
  return line.filter((v) => v >= 2).length;
}
