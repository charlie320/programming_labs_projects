class Mammal

  def initialize
    puts "I am alive"
    self
  end
  def breath
    puts "Inhale and exhale"
    self
  end
  def who_am_i
    puts self
    self
  end
end

my_mammal = Mammal.new
my_mammal.who_am_i
my_mammal.who_am_i.breath
