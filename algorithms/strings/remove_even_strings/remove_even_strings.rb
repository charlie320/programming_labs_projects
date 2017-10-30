def remove_even_strings(arr)
  l = arr.length - 1

  l.downto(0) do | i |
    if arr[i].length % 2 == 0
      arr.delete_at(i)
    end
  end
  return arr
end

arr = ["John","Jane","James","Jan","Jesse","Jane","Joe","Mary","Joan"]
print remove_even_strings(arr)
puts
