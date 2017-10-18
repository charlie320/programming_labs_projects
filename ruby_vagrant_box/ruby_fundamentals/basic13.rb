# puts 1.upto(255) {|i| print i, " "}

# puts (1..255).reject { |i| i % 2 == 0 }

# def sum_numbers()
#   sum = 0
#   for i in 0..255
#     sum += i
#     puts "New number: #{i} Sum: #{sum}."
#   end
# end
# sum_numbers()

arr = [1,3,15,7,9,13]
#
# def array_iterate(arr)
#   last = arr.length - 1
#   for i in 0..last
#       puts arr[i]
#   end
# end
#
# array_iterate(arr)

# def array_max(arr)
#   max = arr[0]
#   last = arr.length - 1
#   for i in 1..last
#     if arr[i] > max
#       max = arr[i]
#     end
#   end
#   return max
# end
#
# puts array_max(arr)

# def array_avg(arr)
#   last = arr.length - 1
#   sum = 0
#   for i in 0..last
#     sum += arr[i]
#   end
#   avg = (sum/arr.length).to_f
# end
#
# puts array_avg(arr)

# def array_odd()
#   sum = 0
#   arr = []
#   j = 0
#   for i in (0..255).reject { |i| i % 2 == 0 }
#     arr[j] = i
#     j += 1
#   end
#   return arr
# end
#
# newArr = array_odd()
# puts newArr
#
# y = 3
#
# def greater_than_y(y, arr)
#   last = arr.length - 1
#   count = 0
#   for i in 0..last
#     if arr[i] > y
#       count += 1
#     end
#   end
#   return count
# end
#
# puts greater_than_y(y, arr)

# def square_array(arr)
#   newArr = []
#   last = arr.length - 1
#   for i in 0..last
#     newArr[i] = arr[i] * arr[i]
#   end
#   return newArr
# end
#
# puts square_array(arr)

x = [-3,4,2,-9,7,6,-2,8]
#
# def remove_neg(x)
#   i = 0
#   while i < x.length
#     if x[i] < 0
#       x.delete(x[i])
#     else
#       i += 1
#     end
#   end
#   return x
# end
#
# print remove_neg(x)

z = [1,3,2,5,4,7,6,9]

# def triple_result(z)
#   last = z.length - 1
#   max = z[0]
#   min = z[0]
#   sum = 0
#   for i in 0..last
#     if z[i] < min
#       min = z[i]
#     end
#     if z[i] > max
#       max = z[i]
#     end
#     sum += z[i]
#   end
#   avg = sum/z.length
#   newArr = [max,min,avg]
#   return newArr
# end
#
# puts triple_result(z)

# def shift_array(z)
#   last = z.length - 1
#   stop = z.length - 2
#   for i in 0..stop
#     z[i] = z[i+1]
#   end
#   z[last] = 0
#   return z
# end
#
# puts shift_array(z)

def remove_neg(x)
  i = 0
  while i < x.length
    if x[i] < 0
      x[i] = "Dojo"
    end
    i += 1
  end
  return x
end

print remove_neg(x)
