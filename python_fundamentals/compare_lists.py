#Compare Lists

list_1 = [1,2,5,6,2]
list_2 = [1,2,5,6,2]

list_3 = [1,2,5,6,5]
list_4 = [1,2,5,6,5,3]

list_5 = [1,2,5,6,5,16]
list_6 = [1,2,5,6,5]

list_7 = ['celery','carrots','bread','milk']
list_8 = ['celery','carrots','bread','cream']

def compareLists(l1, l2):
    if l1 == l2:
        print "The lists are the same"
    else:
        print "The lists are not the same"

compareLists(list_1, list_2)
