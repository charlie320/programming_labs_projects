words = "It's thanksgiving day.  It's my birthday, too!"
print words.find("day")

print words.replace("day", "month",2)

x = [2,54,-2,7,12,98]

print min(x)
print max(x)

y = ["hello",2,54,-2,7,12,98,"world"]

print y[0]
print y[len(y)-1]

newList = [y[0],y[len(y)-1]]
print newList

j = [19,2,54,-2,7,12,98,32,10,-3,6]

j.sort()

print j

midpoint = len(j)/2

j1= j[midpoint:len(j)]
print j1
j2 = j[0:midpoint]
print j2

j1.insert(0,j2)
print j1
