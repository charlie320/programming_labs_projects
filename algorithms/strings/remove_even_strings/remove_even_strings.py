def remove_even_strings(arr):
    l = len(arr)-1

    for i in range(l,-1,-1):
        if len(arr[i]) % 2 == 0:
            arr.remove(arr[i])
    return arr


arr = ["John","Jane","James","Jan","Jesse","Jane","Joe","Mary","Joan"]
print remove_even_strings(arr)
