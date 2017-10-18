class Project
  @@no_of_projects = 0

  attr_accessor :project_name, :project_description

  def initialize(name, description)
    @project_name = name
    @project_description = description
    @@no_of_projects += 1
    puts "Number of projects:  #{@@no_of_projects}"
  end
  def elevator_pitch
    puts "#{@project_name}, #{@project_description}"
  end

end

project1 = Project.new("Project 1", "Description")
project1.elevator_pitch
puts project1.project_name
puts project1.project_description
