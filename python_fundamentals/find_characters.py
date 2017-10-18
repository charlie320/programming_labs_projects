#Find Characters

word_list = ['hello','world','my','name','is','Anna']
char = 'a'

def findCharacters(wl, ch):
    result = []
    for i in range(0,len(wl)):
        if ch in wl[i]:
            result.append(wl[i])

    print result

findCharacters(word_list, char)
