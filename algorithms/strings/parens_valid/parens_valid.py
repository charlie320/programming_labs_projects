def parens_valid(paren_string):
    l = len(paren_string)
    open_parens = 0
    valid_parens = True

    for i in range(0,l,1):
        if paren_string[i] == "(":
            open_parens += 1
        if paren_string[i] == ")":
            if open_parens > 0:
                open_parens -= 1
            else:
                valid_parens = False
                return valid_parens

    if open_parens == 0:
        valid_parens = True
    else:
        valid_parens = False
    return valid_parens


paren_string1 = "N(O(p)3";  #  return false
paren_string2 = "N(O(p)3)";  #  return true
paren_string3 = "N(O(p)3xyz(a))";  # return true
paren_string4 = "N(O(p)3xyz(a)(132)";  #  return false
paren_string5 = "N)O)p)3xyz(a((132";  #  return false
paren_string6 = "(N)Op)3xyz(a((132"; #  return false
paren_string7 = "NOp3xyza132"; #  return true

print parens_valid(paren_string7)
