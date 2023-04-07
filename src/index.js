import "./styles.css";

console.log("test");

//変数、定数宣言
// var testOld = 'test';

const fastName = "Tarou";

let lastName = "Tanaka";

//テンプレート文字列 ``
const userName = `${fastName} ${lastName}さん`;

//アロー関数 function(){}の代替で使える。ただしthisが宣言した場所を参照してしまう。ネスト無しだとwindowがthisに
//関数内のメソッドに用いる際は特に注意
const nameShow = () => {
  console.log(userName);
};

//分割代入　オブジェクトから同名の受け皿を変数に受け取る

const myObject = {
  name: "yamada",
  old: 20,
};

const { name, old } = myObject;

//デフォルト値　値が無い場合、指定の値を埋め込む指定。 デフォルト値無しの際はundefinedになる

const { from = "tokyo", height = 170 } = myObject;
console.log(from, height);

//スプレッド構文　...
//配列の展開
const arr1 = [1, 2];
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//スプレッド構文を利用して配列の中身をまとめてみる
const arr2 = [1, 2, 3, 4, 5, 6];
//配列版分割代入
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピーと結合

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
const arr7 = [...arr4, ...arr5];

//メリットはイコールでそのまま代入すると編集したときに参照元まで変更されてしまう
const arr8 = arr4;
arr8[0] = 700;
console.log(arr4); //参照元のarr4まで変更されてしまっている

//mapやfilterなど配列から新たな配列を作る

const nameArr = ["tanaka", "yamada", "jake"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}
//mapで簡略化
const nameArr2 = nameArr.map((name) => {
  //配列内の要素を受け取り操作する
  return name;
});
//mapの二つ目の引数にはindex番号が入ってくる
nameArr.map((name, index) => console.log(`${index + 1}:${name}さん`));

//filter returnに条件を書いてtrueの物だけ新しい配列として返す

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1; //奇数指定
  // return num % 2 === 0; //偶数指定
});

//三項演算子
//条件 ? trueの処理　: falseの処理；
let testNum = 1300;
//toLocaleStringは親のnumberをみて桁ごとにカンマを打ってくれる
console.log(testNum.toLocaleString());

let testNum2 = "1300";

const formattedNum =
  typeof testNum2 === "number"
    ? testNum2.toLocaleString()
    : "numberではありません";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100over" : "OK!";
};

console.log(checkSum(20, 20));

//論理演算子 && ||
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log('1か2はtrueになります')
// }

// if(flag1 && flag2) {
//   console.log('1も2はtrueになります')
// }

// || は左がfalseなら右側を返す
// const flagNum = null;//feeに金額が未設定ですが入る
const flagNum = 100; //feeに100が入る
const fee = flagNum || "金額が未設定です";
console.log(fee);
// &&　は左がtrueなら右側を返す
// const flagNum2 = null;
const flagNum2 = 100; //
const fee2 = flagNum2 && "何か設定されました"; //左がtrueなら'何か設定されました'が入る
console.log(fee2);
