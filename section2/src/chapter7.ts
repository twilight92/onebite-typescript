// void
// void -> 공허(아무것도 없음을 의미하는 타입

// 반환
function func1(): string {
  return "hello";
}

// 반환하지 않고 출력(반환 타입은 무엇으로 해야할까? -> void)
function func2(): void {
  console.log("hello");
}

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;
