function solution(quiz) {
  let result = [];
  for (item of quiz) {
    const 연산식 = eval(item.split(" = ")[0]);
    const 결과값 = +item.split(" = ")[1];
    result.push(eval(연산식) === 결과값 ? "O" : "X");
  }
  return result;
}
