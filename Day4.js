                             //constructor
let details={
    name:"js",
    totalmark:100,
    subject:{
        dbms:90,
        java:100
    },
    sum:function(){
        let total=this.subject.dbms+this.subject.java;
        return total;
    }
}
console.log(details.name);
console.log(details["totalmark"]);//if we are calling a key it should be in "" quotes
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.sum())

                            //array of object
//an array of object is a collection where each element is an object with properties 
// this is used to group related data together in a structured way

                            //object destructing
//object destructing is a syntax in javascript that allows you to extract values from 
//objects and assign them to variables in a clean and readable way
let person={
    job:"SoftwareTester",
    salary:25000
}
const{job:firstkey,salary:secondkey}=person
console.log(firstkey+" "+secondkey);

                                //
let arr=new Array(1,2,"three");
console.log(arr[2]);

let arr2=["js",true,false];
//array destructuring
const[name,b1,b2]=arr2;
console.log(name);
                              //filter()
//Returns a new array containing only the elements that match a condition.
let student=[
    {name:"Tae",grade:"A"},
    {name:"Suga",grade:"B"},
    {name:"Joonie",grade:"A"},
    {name:"Jin",grade:"B"}                    
]
let gradestudent=student.filter(student => student.grade==="A");
console.log(gradestudent);
                                //slice
//changes the original array by adding/removing items at a specific index
                            //removing items
let data=[1,2,3,4,5,6,7];
let result=data.slice(2,7);
console.log(result);
                            //adding items
let names=["Tae","Suga","jhpe","Joonie"];
names.splice(1,1,"JK");
console.log(names);
