remember to create project with: rails new project --database=postgresql --skip-test-unit

remember to install gems:
rails-footnotes
simple_form
rspec
validates_timeliness

# Features Required:
#
# Login and Registration with validations. Validation errors should appear on the page.
# Display ideas with the count of likes (Home Page); users who liked the idea(Like Status page); user's profile page that displays the number of posts/likes of the certain user.
# Logged user will be able to delete his own post.
# A user should not like the same idea multiple times.
# Count of Likes (on Home Page) are updating upon clicking of the "Like" link.
# Logout feature.
# You must be able to deploy your work to Amazon EC2 and provide the IP address or subdomain/domain name to where your work has been deployed. Please note that Heroku deployment is not honored.
# Submission Requirement: Your code, a text file with the IP address or subdomain/domain name for the deployed work and short video demo link.

Objects:  User, Post, Like

User:  has name, alias, email, password.  Has many posts(created) and many posts_liked through Like
Post:  has content, user:references(who created the post?).  Belongs to User(creator) and many_to_many posts through Like
Like:  has user_id and post_id.  Many_to_many posts and users

Models:
User - name, name_alias, email, password
has_many :posts, dependent: :destroy # events user has created
has_many :likes, dependent: :destroy # attending_event objects
has_many :posts_liked, through: :likes, source: :event # events user is attending through attending_events table

Post - content, user:references

Like - user:references, post:references

Controllers:
ApplicationController already created
Sessions controller
Users controller
Posts controller
Likes controller

Restful Routes:
# get "users" => "users#index", as: :users # Route to display all users and/or log in
# get "users/new" => "users#new", as: :users_new # Route to render form for new user
# post "users" => "users#create", as: :users_create # Route to create new user
# get "users/:id" => "users#show", as: :users_show # Route to display user
# get "users/:id/edit" => "users#edit", as: :users_edit # Route to form to update user profile
# patch "users/:id" => "users#update", as: :users_update # Route to update user profile
# delete "users/:id" => "users#destroy"

get "posts" => "posts#index", as: :posts # Route to display all users and/or log in
# get "users/new" => "users#new", as: :users_new # Route to render form for new user
post "posts" => "posts#create", as: :posts_create # Route to create new user
# get "users/:id" => "users#show", as: :users_show # Route to display user
# get "users/:id/edit" => "users#edit", as: :users_edit # Route to form to update user profile
# patch "users/:id" => "users#update", as: :users_update # Route to update user profile
# delete "users/:id" => "users#destroy"

post "likes" => "likes#create", as: :likes_create # Route to create new user
delete "likes/:id" => "likes#destroy", as: :likes_destroy

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
