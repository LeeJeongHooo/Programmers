function solution(array) {
  return array.join("").match(/7/g).length;
}

solution([7, 77, 17]);
