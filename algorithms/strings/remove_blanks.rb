def remove_blanks(myString)
  len = myString.length
  newString = String.new()
  # for i in 0..len
  (0..len).each do |i|
    if myString[i] != " "
      newString << myString[i].to_s
    end
  end
  return newString;
end

myString = " Pl   ayTha tF u nkyM usi c  ";
puts remove_blanks(myString)
