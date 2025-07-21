                        //global scope
//variables are declared outside any function or block is the global scope
let x=10;
function SendMessage(){
    console.log("Hi BTS");
    console.log(x);//inside
}
SendMessage();
 console.log(x);//outside-global scope

                        //function scope
//only accessible in the function in which they are declared is function scope
 function SendMessage(){
    let x=10;
    console.log("Hi BTS");
    console.log(x);//within function
}
SendMessage();

                        //block scope
// the block scope of a variable means that the variable is accessible within the 
// block that is between the curly braces
function Check(){
    if(true){
        let name="Web development";//can be accessed only within the block
        var iscloudy=true;//can be accessed anywhere since there is var
        console.log(name);
    }
    console.log(iscloudy);//output:true
    console.log(name);//output:error
}

                        //callback function
// in javascript it is a function that is passed as an argument to another function 
// it is executed after the completion of that function 
// used for handling asynchronous operations(API,Timeouts,event handling),
// customizing behaviour inside function
function first(){
    console.log("this is my first function");
}
function second(callback){
    console.log("this is my second function");
    settimeout(callback,2000);
}
second(first)
                        //arrow function
let count=0;
let Input=()=>{
    count++;
    console.log(count);
    if(count==5){
        count++;
    }
}
Input();