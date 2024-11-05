{
  // Getter and setter
  class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;
    protected _studentBalance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id, 
      this.name = name, 
      this._balance = balance;
    }
    // getter
    get balance() {
      return this._balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    //   addDeposit(amount : number){
    //       this._balance = this._balance + amount
    //   }

    //   getBalance(){
    //       return this._balance;
    //   }
  }

  const mehediAccount = new BankAccount(111, "Mr. Mehedi", 20);

  //   mehediAccount.addDeposit(650); // function call kore
  //   const myBalance = mehediAccount.getBalance();

  mehediAccount.deposit = 120;
  const myBalance = mehediAccount.balance; // property er moto kore
  console.log(myBalance);

  class StudentAccount extends BankAccount {
    test() {
      this._studentBalance = this._studentBalance;
    }
  }
}
