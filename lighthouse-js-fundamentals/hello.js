//first 
/*
const sayHello = function(){
  console.log("Hello, world");
}
sayHello();
*/

// add parameter (name)
/*
const sayHello = function(name){
  console.log("Hello, " + name);
}
sayHello("Tanner");
sayHello("Caliban");
sayHello("Miranda");
*/

// console.log prints to console
const sayHelloToConsole = function (name){
  console.log("Hello, " + name);
}
sayHelloToConsole("John");

// return nothing prints to console
const returnSayHello = function (name){
  return "Hello, " + name;
}
const greeting = returnSayHello("John");
//added console.log to print to console
console.log(greeting);