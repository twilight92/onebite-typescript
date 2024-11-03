/**
 * Unknown 타입(타입 계층도 가장 위/모든 타입의 슈퍼 타입)
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hellow";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  let num: number = unknownVar;
  let str: string = unknownVar;
  let bool: boolean = unknownVar;
}

/**
 * Never 타입(타입 계층도 가장 아래/모든 타입의 서브 타입)
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  let never1: never = 10;
  let never2: never = "string";
  let never3: never = true;
}
