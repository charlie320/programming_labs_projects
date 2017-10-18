remember to install gems:
rails-footnotes
simple_form
rspec
validates_timeliness

Remember to declare postgreSLQ database.
Ex: rails new DojoSecrets --database=postgresql --skip-test-unit #skip-test-unit is optional

Models:
User - first_name, last_name, email, city, state, password
Event - name, date, city, state, user:references
Comment - content, user:references, event:references
Signup - user:references, event:references

Controllers:
ApplicationController already created
Sessions controller
Users controller
Events controller
Signups controller
Comments controller

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

Begin Building Views/Templates - do not copy application.html.erb yet - wait until all pages are working

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

From comments page-didn't work well.  Needed to refresh.
<table>
  <tr>
    <td><h3>Add Comment:</h3></td>
  </tr>
  <form class="" action="/events/<%=@event.id%>/comments" method="post">
    <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
    <tr>
      <td><textarea name="discussion[content]" rows="4" cols="40"></textarea></td>
    </tr>
    <tr>
      <td><input type="submit" name="submit" value="Submit Comment"></td>
    </tr>
  </form>

</table>
