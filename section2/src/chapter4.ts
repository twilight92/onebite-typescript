// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 1,
  name: "홍길동",
  nickname: "dong",
  birth: "1997.01.07",
  bio: "hi",
  location: "서울",
};

// 인덱스 시그니처
type countryCodes = {
  [key: string]: string;
};

let countryCodes: countryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
};
