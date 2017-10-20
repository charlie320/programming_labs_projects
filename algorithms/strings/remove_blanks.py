def remove_blanks(myString):
    ln = len(myString)
    newString = ""
    for i in range(ln):
        if myString[i] != " ":
            newString += myString[i]
    return newString


myString = " Pl   ayTha tF u nkyM usi c  ";
print(remove_blanks(myString))
