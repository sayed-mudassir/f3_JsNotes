class Bank{
    /**
     * to make property private you need to instantiate those variable before constructor
     * use # before c private to make them private
     */
    #balance;
    constructor(name,balance,bank){
        this.name = name;
        this.#balance=balance;
        this.bank=bank;
    }
    getBalance(upiPin){
        // if(upiPin) is correct
        // then show
        return this.#balance;
        // else show invalid pin message
    }
    setBalance(amt){
        this.#balance = amt;
    }

}
const bank = new Bank("name",4100,"SBI");
console.log(bank);
// console.log(bank.#balance) this private field used to resstrict the filed to get alter outside the class
console.log(bank.getBalance(112)) // getters an setter are used to get and set the private values
bank.setBalance(1200)
console.log(bank.getBalance(121))