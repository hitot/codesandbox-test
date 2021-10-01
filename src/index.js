/**
 * comment
 */
var val1 = "var変数";
console.log(val1);

//　var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

//　var変数は再宣言も可能
var val1 = "var変数を再宣言";
console.log(val1);

// let,const
let val2 = "let変数";
console.log(val2);

val2 = "let変数も上書き可能";
console.log(val2);

// letは再宣言不可
// let val2 = "NG";

const val3 = "const変数";
console.log(val3);

// constは上書きも再宣言不可
// val3 = "NG";
// const val3 = "NG";

// const object
const val4 = {
  name: "AAA",
  age: 20
};
console.log(val4);

// const objectはプロパティ変更可能
val4.name = "BBB";
val4.age = 30;
val4.address = "tokyo";
console.log(val4);

// const 配列はプロパティ変更可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * template文字列
 */
const name = "CCC";
const age = 20;

const msg1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(msg1);
// テンプレート文字列
const msg2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(msg2);

/**
 * アロー関数
 */
// 従来
// function fn1(str) {
//   console.log("fn1 is called =" + str);
// }
// fn1("test");
const fn1 = function (str) {
  return str;
};
console.log(fn1("test"));
