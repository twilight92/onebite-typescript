// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // 문자형 메서드
anyVar.toFixed(); // 숫자형 메서드

let num: number = 10;
num = anyVar;
