alert("我是警告框");
var msg = prompt("输入你的信息");
console.log(msg);
document.write(msg);
document.writeln(msg);
document.write(msg);

let l2 = "我是测试";
{
    l1 = "龙少";
}
document.write(l1);
document.write(typeof (l1)+"<br>");
document.write(typeof (l2)+"<br>");
let l3;
document.write("let l3的类型是"+typeof (l3)+"<br>");
let l4=true;
document.write("let l4=true的类型是"+typeof (l4)+"<br>");
let l5=18;
document.write("let l5=18的类型是"+typeof (l5)+"<br>");
let l6=null;
document.write("let l6=null的类型是"+typeof (l6)+"<br>"); //js的原始错误，应该是null类型
console.log(1 / 0); //Infinity 无穷大
console.log(typeof (100n));