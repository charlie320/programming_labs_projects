import re

def is_alphabetical(stringArg):
    stringArg = stringArg.lower()
    strLength = len(stringArg)
    pattern = re.compile("[^a-z]")

    if not stringArg or strLength <= 1:
        return True
    if pattern.match(stringArg[0]):
        return "Invalid input"

    for i in range(0,strLength - 1):
        if pattern.match(stringArg[i+1]):
            return "Invalid input"
        if stringArg[i] > stringArg[i + 1]:
            return False
    return True


print(is_alphabetical("")); # true
print(is_alphabetical(" ")); # true
print(is_alphabetical("a")); # true
print(is_alphabetical("ab")); # true
print(is_alphabetical("AbC")); # true
print(is_alphabetical("abc")); # true
print(is_alphabetical("aaabbbc")); # true
print(is_alphabetical("abcedfg")); # false
print(is_alphabetical("facetiously")); # false
print(is_alphabetical("adept")); # true
print(is_alphabetical("about")); # false
print(is_alphabetical("abcde!")); # invalid input
