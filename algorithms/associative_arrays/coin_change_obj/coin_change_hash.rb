def coin_change_hash(money)
  coins = { half_dollar: 0, quarter: 0, dime: 0, nickel: 0, penny: 0 }

  if (money <= 0)
    return coins
  end
  if (money >= 0.5)
    coins['half_dollar'] = (money/0.5).floor
    money = money % 0.5
  end
  if (money >= 0.25)
    coins['quarter'] = (money/0.25).floor
    money = money % 0.25
  end
  if (money >= 0.1)
    coins['dime'] = (money/0.1).floor
    money = money % 0.1
  end
  if (money >= 0.05)
    coins['nickel'] = (money/0.05).floor
    money = money % 0.05
  end
  if (money >= 0.01)
    coins['penny'] = (money/0.01).round
  end

  return coins
end


money = 1.49
puts(coin_change_hash(money))
