console.log("Jai mata di");

// Var: It is used as globally or functionally scopped. When we declare a variable in a function
// we can only access it inside of function only we can not access it outside of function.
// If we declare variable outside then we can use this variable globally or anywhere. 
// WE CAN'T USE it many time. Var is redeclared variable

// var a=10;
// var a=20;
// console.log(a);
//output is 20

// This var code should be run because age is globally scopped
// var age=25;
// if(true){
//     console.log(age);
// }


//this code also run because it is inside of the functon if we print it outside then it shows us error
// function check(){
//     var age=25;
//     console.log(age);
// }
// check();


//now this will show you error that age is not defined because you access the age outside of function so it shows you error.
// function check(){
//     var age=25;
//     }
//     console.log(age);
//     check();


// Let variable 
// let a=10;
// console.log(a);



//this code throw error because we cant access the variable outside of curly bracket
// {
//     let a=10
// }
// console.log(a)



//this code is run properly because we can access a inside of curly brackets
// {
// let a=10;
// console.log(a)
// }



//redeclaration is not possible in let variable
// let a=10;
// let a=20;
// console.log(a);
//output is redeclaration of a is not possible



//but we can redeclare it using see this example and it is known as dynamic variable
// let a=20;
// a=30;
// a=null
// a=true
// a="Mansi";
// console.log(a);
//output is Mansi



//Const Variable
// const a=10
// console.log(a)



//Now what are datatypes
// their are 7 types of data type 
// 1. Number
// 2. String
// 3. Boolean
// 4. null
// 5. undefined 
// 6. bigInt
// 7. symbol


//1. Number
// let num=10;
// console.log(num)
// console.log(typeof(num))


//2. String
// let namee="Mansi Thakur"
// console.log(namee)
// console.log(typeof(namee))


//3. Boolean
// let marks=true
// console.log(marks)
// console.log(typeof(marks))

//4. undefined: when we can assign value in it.
// let marks;
// console.log(marks)
// console.log(typeof(marks))


// 5. null
// let home=null
// console.log(home);
// console.log(typeof(home))


//6. bigint
// let hine=BigInt(82636734672)
// console.log(hine)
// console.log(typeof(hine))


