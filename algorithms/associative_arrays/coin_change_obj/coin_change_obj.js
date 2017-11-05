function coin_change_obj(money) {
  var coins = {'half_dollar': 0, 'quarter': 0, 'dime': 0, 'nickel': 0, 'penny': 0 }

  if (money <= 0) {
    return coins;
  }
  if (money >= .5) {
    coins.half_dollar = Math.trunc(money/.5);
    money = money % .5;
  }
  if (money >= .25){
    coins.quarter = Math.trunc(money/.25);
    money = money % .25;
  }
  if (money >= .1) {
    coins.dime = Math.trunc(money/.1);
    money = money % .1;
  }
  if (money >= .05) {
    coins.nickel = Math.trunc(money/.05);
    money = money % .05;
  }
  if (money >= .01) {
    coins.penny = Math.round((money/.01)*100)/100;
  }

  return coins;

}


var money = 8.49
console.log(coin_change_obj(money));
