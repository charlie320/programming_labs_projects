#Multiples, Sum, Average
#Multiples
#Part 1

for count in range(0,1000):
    if count % 2 != 0:
        print count

#Part 2

count1 = 5
while count1 < 1000000:
    print count1
    count1 += 5

#Sum List
a = [1,2,5,10,255,3]
sum = 0;
for count2 in range(0,len(a)):
    sum += a[count2]
print "The sum is equal to", sum

#Average List
avg = sum/len(a)
print "The average is equal to",avg
