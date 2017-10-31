import math

def is_palindrome(stringArg):
    lastChar = len(stringArg) - 1
    stringHalf = len(stringArg)/2 # truncated integer returned from division so math.floor not necessary
    print(stringHalf)
    isPalindrome = True

    for i in range(0,stringHalf,1):
        if stringArg[i] != stringArg[lastChar - i]:
            isPalindrome = False
            return isPalindrome
    return isPalindrome


print(is_palindrome("dad")) # true
print(is_palindrome("racecar")) # true
print(is_palindrome("daddy")) # false
print(is_palindrome("abba")) # true
print(is_palindrome("Abba")) # false
print(is_palindrome("")) # true
print(is_palindrome(" ")) # true
