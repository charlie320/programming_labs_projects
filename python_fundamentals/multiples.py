#Multiplication Table

def printMultTable():
    firstLine = ['x',1,2,3,4,5,6,7,8,9,10,11,12]
    print " ".join(map(str,firstLine))
    for i in range(1,13):
        newList = [i]
        for j in range(1,13):
            newList.append((j * i))
        print " ".join(map(str,newList))

printMultTable()
