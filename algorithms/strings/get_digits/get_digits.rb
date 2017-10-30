def get_digits(myString)
  len = myString.length
  newString = String.new()

  (0..len).each do |i|
    if (myString[i] =~ /\d/)
      newString << myString[i]
    end
  end
  return newString
end

myString = "0s1a3y5w7h9a2t4?6!8?0"
puts(get_digits(myString))
