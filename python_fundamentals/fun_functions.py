#Fun With Functions

#odd_even

def odd_even():

    for i in range (1,2001):
        if i % 2 == 0:
            print i, "is an even number."
        else:
            print i, "is an odd number."

odd_even()

#Multiply
def multiply(myArray, num):
    for i in range (0, len(myArray)):
        myArray[i] = myArray[i] * num
    return myArray

num = 2
myArray=[2,3,4]

#print multiply(myArray, num)

#Hacker Challenge
def layered_multiples(arr):
    newArray=[]
    for i in arr:
        valArray=[]
        for i in range(0,i):
            valArray.append(1)
        newArray.append(valArray)
    return newArray

x = layered_multiples(multiply(myArray, num))
print x
