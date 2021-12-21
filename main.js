// let
// a = "Добро пожаловать в калькулятор!";
// if (a == "Добро пожаловать в калькулятор!");
//     console.log(a);
//     alert(a);
// let
// b = Number(prompt("Write the first number!",));
// c = Number(prompt("Write second number ",));
// op = prompt("+");
// if (op == "+");
//     alert("The sum of these numbers equal",b + c);
// let
// d = Number(prompt("Write the first number!",));
// e = Number(prompt("Write second number",));
// res = "-";
// if (res == "-");
//     alert("The residual of these numbers are", d - e);
// let
// f = Number(prompt("Write the first number!",));
// g = Number(prompt("Write second number",));
// multi = "*";
// if (multi == "*");
//     alert("The multiplication of these numbers equal", f * g);
// let
// h = (prompt("Write the first number!",));
// i = (prompt("Write second number",));
// div = "/";
// if (div == "/");
//     alert("The division of these numbers are", h / i);
// let
// v = Number(prompt("From 1 to 10",));
// // r = Number(prompt("From 5 to 10"));
// if (v < 5);
//     alert("Ok thanks for your rate!");
// if ( v >= 5);
//     alert("Ok Thanks for you, you are the best!");
alert("Дбро пожаловать в калькулятор!");
alert("Чтобы начать нажмите на OK! Ok? ");
prompt("Вы оцените мой труд?");
function insert(num) {
    document.form.textview.value =
    document.form.textview.value + num;
}
function clean(){
    document.form.textview.value = "";

}
function back(){
    var exp =  document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
function equal(){
    var exp =  document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);

    }
}