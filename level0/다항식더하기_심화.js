// 다항식에서 이창과 삼차항까지 고려해서 해결 한 문제

function solution(polynomial) {
  polyobj = {};
  polynomial.split(" + ").map((val) => {
    const key = val.match(/x/g) ? val.match(/x/g).join("") : "상수";
    polyobj[key] = val.match(/[0-9]/g)
      ? Number(val.match(/[0-9]/g).join("")) + (polyobj[key] ? polyobj[key] : 0)
      : 1;
  });

  return Object.entries(polyobj)
    .map((v) => {
      if (v[0] === "상수") return v[1];
      return v[1] + v[0];
    })
    .join(" + ");
}

solution("3xx + 7 + x + 2x + 10");
