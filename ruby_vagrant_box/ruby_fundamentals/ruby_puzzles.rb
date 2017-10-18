
# myArray = [3,5,1,2,7,9,8,13,25,32]
#
# #print the sum of all the numbers, return array with numbers > 10,
#
# def sumLessThanTen(arr)
#   last = arr.length
#   sum = 0
#   for i in 0..last
#     sum += arr[i].to_i
#   end
#   puts sum
#
#   newArray = arr.reject {|i| i < 10}
#   return newArray
# end
#
# puts sumLessThanTen(myArray)

# nameArray = ['John', 'KB', 'Oliver', 'Cory', 'Matthew', 'Christopher']
#
# def name_shuffle_array(arr)
#   puts arr.shuffle
#
#   last = arr.length
#   newArray = arr.reject { |i| i.length <= 5}
#   return newArray
#
# end

# puts name_shuffle_array(nameArray)

# def alphabet()
#   alphaArray = [*('A'..'Z')]
#   puts alphaArray
#   shuffledArray = alphaArray.shuffle
#   puts shuffledArray[0]
#   last = shuffledArray.length - 1
#   puts shuffledArray[last]
#   if ['A','E','I','O','U'].include?(shuffledArray[0])
#     puts "The first letter of the shuffled list is a vowel."
#   end
# end
#
# puts alphabet()

# def generate_random_array()
#   randomArray = [10]
#   for i in 0..9
#     randomArray[i] = rand 100
#   end
#   return randomArray
# end
#
# puts generate_random_array()
array = []
array2 = []
# 10.times { array.push(rand 55..100) }
# p array.sort!
# p array.max
# p array.min

# 5.times { array.push((65+rand(26)).chr) }
# p array.join("")

10.times { array2.push((0...5).map {(65 + rand(26)).chr }.join)}
puts array2

(0...10).map{(0...5).map {(65 + rand(26)).chr }.join}
