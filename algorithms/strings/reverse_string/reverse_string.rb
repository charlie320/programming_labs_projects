def reverse_string(string_arg)
  strLength = string_arg.length
  newString = string_arg[strLength-1]

  (strLength-2).downto(0) do | i |
    newString << string_arg[i]
  end
  return newString
end

string_arg = "Hello World"
puts reverse_string(string_arg)
