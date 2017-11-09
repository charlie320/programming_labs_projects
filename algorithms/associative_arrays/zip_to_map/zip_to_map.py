def zip_to_map(arr1, arr2):
    l1 = len(arr1)
    l2 = len(arr2)
    i = 0;
    asso_arr = {}

    if (l1 == 0):
        return arr2
    if (l2 == 0):
        return arr1

    while (l1 and l2):
        asso_arr[arr1[i]] = arr2[i]
        l1 -= 1;
        l2 -= 1;
        i += 1;
    return asso_arr



arr1 = ["abc",3,"yo"];
# arr1 = [];
arr2 = [42,"wassup", True];
# arr2 = [];

print(zip_to_map(arr1,arr2));
