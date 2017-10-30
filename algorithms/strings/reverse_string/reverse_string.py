def reverse_string(string_arg):
    strLength = len(string_arg)
    newString = string_arg[strLength-1]

    for i in range(strLength-2,-1,-1):
        newString += string_arg[i]
    return newString


arg_string = "Hello World"
print(reverse_string(arg_string))
