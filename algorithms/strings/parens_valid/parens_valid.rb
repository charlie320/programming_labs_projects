def parens_valid(paren_string)
  l = paren_string.length
  open_parens = 0
  valid_parens = true

  (0..l).each do | i |
    # print paren_string[i]
    if paren_string[i] == "("
      open_parens += 1
    end
    if paren_string[i] == ")"
      if open_parens > 0
        open_parens -= 1
      else
        valid_parens = false
        return valid_parens
      end
    end
  end

  if open_parens == 0;
    valid_parens = true
  else
    valid_parens = false
  end
  return valid_parens
end


paren_string1 = "N(O(p)3";  #  return false
paren_string2 = "N(O(p)3)";  #  return true
paren_string3 = "N(O(p)3xyz(a))";  # return true
paren_string4 = "N(O(p)3xyz(a)(132)";  #  return false
paren_string5 = "N)O)p)3xyz(a((132";  #  return false
paren_string6 = "(N)Op)3xyz(a((132"; #  return false
paren_string7 = "NOp3xyza132"; #  return true

puts parens_valid(paren_string7)
