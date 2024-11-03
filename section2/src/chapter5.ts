// enum 타입(열거형)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자 열거형
enum Role {
  ADMIN, // <- 0
  USER, // <- 1
  GUEST, // <- 2
}

// 문자열 열거형
enum Language {
  Korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.Korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반 유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
