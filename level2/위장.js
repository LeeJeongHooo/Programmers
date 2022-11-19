function solution(clothes) {
  const obj = {};
  answer = 1;

  for (let cloth of clothes) {
    obj[cloth[1]] = obj[cloth[1]] ? ++obj[cloth[1]] : 1;
  }

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}
