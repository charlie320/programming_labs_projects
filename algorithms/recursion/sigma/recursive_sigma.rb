def r_sigma(num)
  if num <= 0
    return "Invalid Number"
  end
  if num == 1
    return 1
  end
  return num + r_sigma(num-1)
end

p(r_sigma(5))
p(r_sigma(1))
p(r_sigma(0))
p(r_sigma(2))
p(r_sigma(10))
