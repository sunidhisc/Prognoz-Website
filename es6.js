/*const name='Prognoz';
console.log(name);
const name1='Technologies';
console.log(name1);

const person={
    name2:'Ganesh',
    age:'21',
    isplaced:true
};
console.log(person.name2);
person.name2='Manish Das';
console.log(person.name2);

let name='Suresh';
console.log(name);
name='Rahul';
console.log(name);

let bike={
    name:'Ninja',
    engine:'998cc',
    abs:'dual channel'
};
console.log(bike.engine);
bike.engine='789cc';
console.log(bike.engine);

function printname(name)
{
    console.log('hello '+name)
}
printname('Ganesh');

const printname= name=>
{
    return `hi ${name}`;
}
console.log(printname('ganesh'));

const printname1=name=> `hiii ${name}`;
console.log(printname1('manisha'));

var name='Piya';
console.log('My name is '+name);
const name1='Vinayak';
console.log(`My name is ${name1}`);

const college={
    name:'BPUT',
    established:'1941',
    ispvt:false
};
let name=college.name;
let established=college.established;
let ispvt=college.ispvt;
console.log(name);
console.log(established);
console.log(ispvt);

const college={
    name:'WER',
    established:'1998',
    ispvt:true
};
let{name,established,ispvt}=college
console.log(name);
console.log(established);
console.log(ispvt);

const arr=['white','pink','blue'];
let[value1,value2,value3]=arr;
console.log(value1);
console.log(value2);
console.log(value3);

function fun(a,b)
{
    return a+b;
}
console.log(fun(2,1));
console.log(fun(2,1))
console.log(fun(2));

function fun(a,b=1)
{
    return a+b;
}
console.log(fun(2,1));
console.log(fun(2));

function fun(a,b)
{
    b=(typeof b!=='undefined')?b:1;
    return a+b;
}
console.log(fun(2,1));
console.log(fun(2));

class Vehicle
{
    constructor(name,engine)
    {
        this.name=name;
        this.engine=engine;
    }
}
const bike1=new Vehicle('Ninja ZX-10R','998cc');
const bike2=new Vehicle('Duke','390cc');
console.log(bike1.name);
console.log(bike2.name);

function fun(a,b)
{
    return a+b;
}
console.log(fun(1,2));
console.log(fun(1,2,3,4,5));

function fun(...input)
{
    let sum=0;
    for (let i of input)
    {
        sum+=i;
    }
return sum;
}
console.log(fun(1,2));
console.log(fun(1,2,3));
console.log(fun(1,2,3,4,5));

console.log(Math.min(1,2,3,-1));

let arr=[1,2,3,-1];
console.log(Math.min(arr));

let arr=[1,2,3,-1];
console.log(Math.min(...arr));

var name="Lilly";
var color="White";
var age=3;
var barkWithName=function()
{
    console.log('Woof Woof !!,I am '
    +this.name+'and I am a'+this.age+
    'years old,'+this.color+'colored dog.Woof Woof !!');
}
var yetanotherdog={name,color,age,barkWithName};
yetanotherdog.barkWithName();

var driver1={
    name:"John",
    speed:50,
    car:"Ferrari",
    speedUp:function(speedup)
    {
        this.speed=this.speed+speedup;
        console.log("new speed="+this.speed)
    }
}

const driver2={
    name:"Jane",
    speed:60,
    car:"McLaren",
    speedUp(speedup)
    {
        this.speed=this.speed+speedup;
        console.log("new speed="+this.speed)
    }
}*/


var promise=new Promise(function(resolve,reject))
{
    const x='Prognoztech';
    const y='Prognoztech'
    if(x===y)
    {
        resolve();
    }
    else
    {
        reject();
    }
    
});
promise.then(function()
{
    console.log('Success you are Prognoz');
}).
catch(function()
{
    console.log('Some error')
}






















