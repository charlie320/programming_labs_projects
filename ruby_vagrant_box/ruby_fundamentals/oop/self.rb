class Fixnum
  def who_am_i
    puts self
  end
end

class String
  def who_am_i
    puts self
  end
end
p(4.who_am_i)
p(15.who_am_i)
p("string".who_am_i)
