class User
  def first_name=(val)
    @first_name = val
  end
  def first_name
    @first_name
  end

  def last_name
    @last_name
  end
end

user1 = User.new
user2 = User.new
user1.first_name = "Matz"

puts user1.inspect
user1.first_name
