def r_gcd(a,b)
  p("#{a} #{b}")
  if a % b == 0
    return b
  else
    return r_gcd(b, a % b)
  end
end

p(r_gcd(81,9))
p(r_gcd(123456,987654))
