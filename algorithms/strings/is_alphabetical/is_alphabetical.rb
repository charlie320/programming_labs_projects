def is_alphabetical(stringArg)
  stringArg = stringArg.downcase
  strLength = stringArg.length

  if !stringArg || strLength <= 1
    return true
  end
  if stringArg[0] =~ /[^a-z]/
    return "Invalid input"
  end

  (0...strLength - 1).each do | i |
    if stringArg[i + 1] =~ /[^a-z]/
      return "Invalid input"
    end
    if stringArg[i] > stringArg[i + 1]
      return false
    end
  end
  return true
end


p(is_alphabetical("")); # true
p(is_alphabetical(" ")); # true
p(is_alphabetical("a")); # true
p(is_alphabetical("ab")); # true
p(is_alphabetical("AbC")); # true
p(is_alphabetical("abc")); # true
p(is_alphabetical("aaabbbc")); # true
p(is_alphabetical("abcedfg")); # false
p(is_alphabetical("facetiously")); # false
p(is_alphabetical("adept")); # true
p(is_alphabetical("about")); # false
p(is_alphabetical("abcde!")); # invalid input
