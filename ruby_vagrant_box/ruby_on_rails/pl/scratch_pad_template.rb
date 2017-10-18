remember to create project with: rails new <project> --database=postgresql --skip-test-unit

remeber to install gems:
rails-footnotes
simple_form
rspec
validates_timeliness

Models:
User - first_name:string, last_name:string, email:string, password:digest
has_many :songs, through: :playlist # songs through playlist
has_one :playlist # playlist objects

Song - title:string, artist:string
has_many :users, through: :playlist
has_many :playlists
Class variable @@times_added

# Playlist is analagous to likes
User_playlist - user:references, song:references
belongs to :user
has_many :songs
has_one :user

Create the database:
rake db:create
rake db:migrate

Controllers:
ApplicationController already created
Session controller
User controller
Song controller
User_playlist controller

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

##########
##########
Check all model controllers for authentication and Authorization

rails g migration AddLocationToUsers user:references # to add field to User model
rails generate migration add_email_to_users email:string

<td>
  <%= link_to "#{post.likes.count} People ", posts_show_path(post.id) %>like this
</td>

<td>
  <%= link_to "#{song.user_playlists.count} People ", posts_show_path(post.id) %>like this
</td>

<%= link_to "Add", user_playlists_create_path(current_user) %>

<%= link_to "Add", user_playlists_create_path(song.id), :method => :post %>


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
