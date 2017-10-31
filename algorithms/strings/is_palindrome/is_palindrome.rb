def is_palindrome(stringArg)
  lastChar = stringArg.length - 1
  stringHalf = stringArg.length/2 # truncated integer returned from division so math.floor not necessary
  p(stringHalf)
  isPalindrome = true

  (0..stringHalf).each do | i |
    if stringArg[i] != stringArg[lastChar-i]
      isPalindrome = false
      return isPalindrome
    end
  end
  return isPalindrome
end


p(is_palindrome("dad")) # true
p(is_palindrome("racecar")) # true
p(is_palindrome("daddy")) # false
p(is_palindrome("abba")) # true
p(is_palindrome("Abba")) # false
p(is_palindrome("")) # true
p(is_palindrome(" ")) # true
