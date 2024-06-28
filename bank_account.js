class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.balance += amount;
        resolve(this.balance);
      }, 2000);
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.balance >= amount) {
          this.balance -= amount;
          resolve(this.balance);
        } else {
          reject(new Error("Saldo kamu tidak mencukupi"));
        }
      }, 2000);
    });
  }
}

module.exports = BankAccount;
