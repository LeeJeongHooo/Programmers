function solution(n) {
  const nums = n.toString().split("");
  let answer = nums.reduce((accu, curr) => {
    return accu + parseInt(curr);
  }, 0);
  return answer;
}
