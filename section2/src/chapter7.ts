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

let a: void;
a = 1;
a = "hello";
a = {};
a = undefined;
a = null;
