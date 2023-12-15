
interface user{
    name:string;
    age:number;
    id:number;
    Email:string

}
let users:user={name:"bari taha",age:33,id:2,Email:"Baritaha4@gmail.com"};
interface Employees extends user{
    salary:number;
}
let emp:Employees={name:"ali mohammad",age:56,id:41,Email:"Ali@gmail.com",salary:580};

let name1="bari taha";
console.log(name1);

let emplist=["x","yz","zz"];
let result=emplist.filter(x=>x.indexOf("x"));
console.log(result);
let listnum=[1,2,3,4,5,6,10];
let result2=listnum.reduce((acc,sum)=>acc+sum);
console.log("Sum = "+result2);


function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log("the sum = "+add(120,20));

function val(x:number){
    let stroe=0;
    if(x%2==0){
        console.log(`the value ${x} is Evev`);

    }
    else{
        console.log(`the value ${x} is Odd`);
    }
}
val(10);
class Employee{
    id!:number;
    name!:string;
    address!:string;
constructor(id:number,name:string,address:string){
    this.id=id;
    this.name=name;
    this.address=address;
}
getData():string{
    return `( id : ${this.id} ) ( Name : ${this.name} ) (Address : ${this.address} )`;
}
}
let bari=new Employee(5,"bari taha","Amman");
;
console.log(bari);
console.log(bari.getData());
let [user1,user2,...other]:user[] = [
{name:"bari",id:1,age:22,Email:"@gmail"},
{name:"ahmad",id:2,age:33,Email:"@gmail2"},
{name:"mohammad",id:3,age:44,Email:"@gmail3"},
{name:"mohammad",id:4,age:24,Email:"@gmail4"},
{name:"mohammad",id:5,age:14,Email:"@gmail5"}
];
console.log(user1);
console.log(user2);
console.log(other);
let result3= other.filter(x=>x.age>20);
console.log(result3);