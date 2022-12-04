function solve(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let evenBirthdayGift = 10;
  let totalMoney = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      totalMoney = totalMoney + (evenBirthdayGift - 1);
      evenBirthdayGift = evenBirthdayGift + 10;
    } else {
      totalMoney = totalMoney + toyPrice;
    }
  }

  if (totalMoney >= washingMachinePrice) {
    let moneyLeft = totalMoney - washingMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyShort = washingMachinePrice - totalMoney;
    console.log(`No! ${moneyShort.toFixed(2)}`);
  }
}

solve(["21", "1570.98", "3"]);
