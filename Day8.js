let current=new Date("2024-08-08");
let day=current.getDay();
console.log(current)//unt
console.log(current.toString());//local
console.log(day);

class Sample{
    constructor(personname){
        this.personname=personnmae;
        console.log(personname)
    }
}
let result=new Sample("Taehyung");

class Bank{
    constructor(initialamount=0){
        this._balance=initialamount;

    }
    get balance(){
        return this._balance;
    }
    set balance(amount){
        if(amount>0){
            this._balance+=amount;
            console.log(amount);
        }
    }
}
let b=new Bank(10);
console.log(b);