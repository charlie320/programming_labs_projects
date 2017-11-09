def zip_to_map(arr1,arr2)
  l1 = arr1.length
  l2 = arr2.length
  i = 0
  asso_arr = {}

  if l1 == 0
    return arr2
  end
  if l2 == 0
    return arr1
  end

  while arr1[i] && arr2[i] do
    asso_arr[arr1[i]] = arr2[i]
    i += 1
  end

  return asso_arr
end

arr1 = ["abc",3,"yo"];
# arr1 = [];
arr2 = [42,"wassup", true];
# arr2 = [];

p(zip_to_map(arr1,arr2));
