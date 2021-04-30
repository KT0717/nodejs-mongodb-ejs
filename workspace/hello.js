// console.log("hello world");

// non blocking
// 次の処理をブロックしない書き方
// worldが先に表示される
/*
setTimeout(function(){
  console.log("hello");
}, 1000);
console.log("world");
*/

// blocking
var start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log("world");