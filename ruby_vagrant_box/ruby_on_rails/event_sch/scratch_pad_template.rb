remeber to install gems:
rails-footnotes
simple_form
rspec
validates_timeliness

Remember to declare postgreSLQ database.
Ex: rails new event_schedule --database=postgresql --skip-test-unit #skip-test-unit is optional

Models:
User - first_name, last_name, email, city, state, password
has_many :events, dependent: :destroy # events user has created
has_many :signups, dependent: :destroy # signups objects
has_many :events_joined, through: :signups, source: :event # events user is attending through signups table
has_many :comments, dependent: :destroy # comments user has created

Event - date, city, state
belongs_to :user
has_many :users, through: :signup
has_many :signups, dependent: :destroy
has_many :comments

SignUp - user:references, event:references
belongs_to :user
belongs_to :event

Comment - event:references, event:references
belongs_to :user
belongs_to :event


Controllers:
ApplicationController already created
Sessions controller
Users controller
Events controller
SignUps controller
Comments controller

Restful Routes:
# get "users" => "users#index", as: :users # Route to display all users and/or log in
# get "users/new" => "users#new", as: :users_new # Route to render form for new user
# post "users" => "users#create", as: :users_create # Route to create new user
# get "users/:id" => "users#show", as: :users_show # Route to display user
# get "users/:id/edit" => "users#edit", as: :users_edit # Route to form to update user profile
# patch "users/:id" => "users#update", as: :users_update # Route to update user profile
# delete "users/:id" => "users#destroy"

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
