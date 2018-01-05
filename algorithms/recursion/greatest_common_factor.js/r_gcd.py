def r_gcd(a,b):
    print("{}, {}").format(a,b)
    if a % b == 0:
        return b
    else:
        return r_gcd(b, a % b)

print r_gcd(81,9)
print r_gcd(123456,987654)
