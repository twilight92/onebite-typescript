/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood"
  },
  urls: ["https://winterlood.com"]
}

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

/*
  암묵적인 any 타입(any 타입의 진화)
  let d: any;와 같이 명시적으로 지정하는 것과 다르다.(진화가 없다.)
*/
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];