/**
 * 타입 단언
 * (타입스크립트 컴파일러의 눈을 감도록 함)
 * (업캐스트 다운캐스트의 개념이 아님)
 */

type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
let num3 = 10 as unknown as string; // 다중 단언(좋은 방법 X ts 쓰는 이유가 없음)

/**
 * const 단언
 */
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 전체 readonly 프로퍼티 만들기

// cat.name = '';

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // 선택자 프로퍼티(있을수도 없을수도)
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

// const len: number = post.author?.length; // 옵셔널 체이닝(undefined가 될 수 있어서 오류 발생)
const len: number = post.author!.length; // Non Null 단언(null이나 undefined가 아닐 거라고 타입스크립트가 믿도록 함)
