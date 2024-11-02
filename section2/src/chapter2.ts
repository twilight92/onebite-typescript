// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "sj"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플(JS는 없고 TS만 있음)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// 배열 메서드 사용시 튜플의 길이 제한이 없기 때문에 각별한 주의 필요
tup1.push(1);
tup1.pop;

const usdrs: [string, number][] = [
  ["이정환", 1],
  ["김정환", 2],
  ["박정환", 3],
];
