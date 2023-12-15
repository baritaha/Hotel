var name1 = "bari taha";
console.log(name1);
var emplist = ["x", "yz", "zz"];
var result = emplist.filter(function (x) { return x.indexOf("x"); });
console.log(result);
var listnum = [1, 2, 3, 4, 5, 6, 10];
var result2 = listnum.reduce(function (acc, sum) { return acc + sum; });
console.log("Sum = " + result2);
function swapN(num1, num2) {
    return [num2, num1];
}
var numbers = swapN(10, 20);
numbers[0];
numbers[1];
console.log(numbers);

