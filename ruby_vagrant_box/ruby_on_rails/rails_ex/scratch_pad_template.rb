remember to install gems:
rails-footnotes
simple_form
rspec
validates_timeliness

Remember to declare postgreSLQ database.
Ex: rails new rails_exam --database=postgresql --skip-test-unit #skip-test-unit is optional

Models:
User - name, email, description, password
has_many :networks, dependent: :destroy
# has_many :friends, dependent: :destroy #friends table objects
has_many :connected_friends, through: :network, source: :user # connected users through friends
has_manu :invites, dependent: :destroy
has_many :invite_requests, through: :invites, source: :user

Network - references:user, friend_id:integer
belongs_to :user
has_many :users

Invite - references:user(sends request), invitee_id:integer(receives request)
belongs_to :user
has_many :users

!!!!Create database!!!!  Then migrate.

Controllers:
ApplicationController already created
Sessions controller
Users controller
Networks controller
Invites controller

Restful Routes:
# get "users" => "users#index", as: :users # Route to display all users and/or log in
# get "users/new" => "users#new", as: :users_new # Route to render form for new user
# post "users" => "users#create", as: :users_create # Route to create new user
# get "users/:id" => "users#show", as: :users_show # Route to display user
# get "users/:id/edit" => "users#edit", as: :users_edit # Route to form to update user profile
# patch "users/:id" => "users#update", as: :users_update # Route to update user profile
# delete "users/:id" => "users#destroy", as: :users_destroy

Controller Methods
for all routes

Begin Building Views/Templates

Authentication versus Authorization-see examples for application and session controllers
Authentication = logging in and having access to certain pages
Authorization = Who can change what?
Check all model controllers for authentication and Authorization

rails g migration AddLocationToUsers user:references # to add field to User model

## Example of link loop
<h3>Secrets</h3>
<% @secrets.each do |secret| %>
  <% # Secret Content that everyone can see %>
  <table>
    <tr>
      <td><%= secret.content %></td>
    </tr>
    <tr>
      <td>future number of likes</td>
      <td>
        <% if current_user == secret.user %>
          <% # Secret Content that only the User that created that secret can see. %>
          <%= link_to "Delete Secret", secrets_destroy_path(secret.id), :method => :delete, :data => {:confirm => "Are you sure?"} %>
        <% end %>
      </td>
    </tr>
  </table>
<% end %>


Pre-exam
created project:  rails_exam --database=postgresql
created database:  rake db:create
AWS instance:  34.228.254.16
Github.com project:  rails_exam.git

Features Required:

Form validations on Login/Register. Validation errors should appear on the page.
Display/update of List of Friends/Networks; Invitations sent by other users (Professional Profile page) and List of Users (Users page)
Ability to send invitation; accept/ignore invitations; and remove current friends/networks
Profile page
Logout feature
You must be able to deploy your work to Amazon EC2 and provide the IP address or subdomain/domain name to where your work has been deployed. Please note that Heroku deployment is not honored.
Txt file in project
Submission Requirement: Your code, a text file with the IP address or subdomain/domain name for the deployed work and short video demo link.

Note:

Do not use scaffold.
The wireframe is available for download here.
Create a 2-3 video showing what you have built. On the video, show the functionality of the page you have built at localhost (not what was deployed). You may download a trial version of Jing, Snag-it or QuickTime for video creation. You may save it in Dropbox public folder and copy the public link.
To prevent other students from copying your work, please make sure your video demo is set to unlisted or with a password, and code is not saved on GitHub.
To minimize score deduction, please make sure you upload the complete requirements (database file, video demo).
If you are having trouble uploading files on the Exam App, please DO NOT unlock another exam. Please email the file to remote-instructors@codingdojo.com and CC your instructor.
