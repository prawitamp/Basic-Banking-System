const BankAccount = require("./bank_account");

async function main() {
  const myAccount = new BankAccount(900000);

  console.log(
    "Saldo awal kamu adalah:",
    myAccount.balance.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    })
  );

  try {
    let balance = await myAccount.deposit(50000);
    console.log(
      "Saldo kamu setelah deposit adalah:",
      balance.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      })
    );

    balance = await myAccount.withdraw(500000);
    console.log(
      "Saldo setelah withdraw:",
      balance.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      })
    );

    balance = await myAccount.withdraw(1000000);
    console.log(
      "Saldo setelah withdraw:",
      balance.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      })
    );
  } catch (error) {
    console.error(error.message);
  }
}

main();
