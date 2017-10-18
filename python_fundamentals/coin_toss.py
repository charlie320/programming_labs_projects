#Coin Tosses

import random

def coin_toss():
    headCount = 0
    tailcount = 0
    for i in range(1,5001):
        result = round(random.uniform(0.0, 1.0))
        if result == 1:
            coinFace = "head"
            headCount += 1
        else:
            coinFace = "tail"
            tailcount += 1
        print "Attempt #{}:  Throwing a coin... It's a {}! ... Got {} head(s) \
        so far and {} tail(s) so far".format(i, coinFace, headCount, tailcount)

coin_toss()
