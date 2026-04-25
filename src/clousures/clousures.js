function sumWithClosure(firstNum) {
  return function (secondNum) {
    if (secondNum === undefined) {
      return console.log(`Solo se paso un numero ${firstNum}`);
    }

    return console.log(`El ahorro actual es ${firstNum + secondNum}`);
  };
}

sumWithClosure(5)(3); // 8
sumWithClosure(5)(0); // 5
sumWithClosure(5)(); // 5

function myMoneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    return console.log(`Monedas guardadas: ${saveCoins}`);
  }

  return countCoins;
}

const juan = myMoneyBox();
juan(5);
juan(10);
juan(12);

console.log("---------------------");
console.log("ANA");
console.log("---------------------");
const ana = myMoneyBox();
ana(2);
ana(5);
