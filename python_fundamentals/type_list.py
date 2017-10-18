#Type List
l1 = ['magical unicorns',19,'hello',98.98,'world']
l2 = [2,3,1,7,4,12]
l3 = ['magical','unicorns']

def typeList(myList):
    total = 0
    stringList = ""
    numberCount = 0
    stringCount = 0

    for i in range(0,len(myList)):
        if type(myList[i]) == int or type(myList[i]) == float:
            total += myList[i]
            numberCount += 1
        else:
            stringList += (myList[i] + " ")
            stringCount += 1

    if numberCount > 0 and stringCount > 0:
        print "The array you entered is of mixed type"
        print "Sum: ", total
        print "String: ", stringList
    elif numberCount > 0 and stringCount == 0:
        print "The array you entered is of int and/or float type"
        print "Sum: ", total
    else:
        print "The array you entered is of string type"
        print "String: ", stringList

typeList(l3)
