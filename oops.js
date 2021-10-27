class Car {
    constructor(model, wheels, engine, door) {
        this.model = model;
        this.wheels = wheels;
        this.engine = engine;
        this.door = door;
    }
}
const ferrari = new Car("ferrari", 4, "v8", 4)
console.log(ferrari);

//------------------------------------------------------------------------------------------

class Bank {
    constructor(accno, name, accType, balance) {
        this.accno = accno;
        this.name = name;
        this.accType = accType;
        this.balance = balance;
    }
    getBalance() {
        return `Your Balance is ${this.balance}`;
     }

    withdraw(withdrawAmount) {
       if(withdrawAmount <= this.balance) {
           this.balance = this.balance - withdrawAmount;
           return this.getBalance();
       }
       else {
           return `Insufficient funds, your balance is ${this.getBalance()}`
       }
    }
}

const Naresh = new Bank(101, 'Naresh', "Savings", 400000);
const Philomina = new Bank(101, 'Philomina', "Current", 50000);
const Vaibhav = new Bank(101, 'Vaibhav', "Savings", 300000);
const Pavithra = new Bank(101, 'Pavithra', "Current", 700000);

console.log(Philomina.getBalance());
console.log(Philomina.withdraw(10000));
console.log(Philomina.getBalance());