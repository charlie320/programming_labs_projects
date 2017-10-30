import re

def get_digits(myString):
    ln = len(myString)
    newString = ""
    pattern = re.compile("\d")

    for i in range(ln):
        if (pattern.match(myString[i])):
            newString += myString[i]

    return int(newString)

myString = "0s1a3y5w7h9a2t4?6!8?0"
print(get_digits(myString))
