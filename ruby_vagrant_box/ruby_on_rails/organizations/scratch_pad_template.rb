Features Required:

Registration and login with validation. Validation errors should appear on the page.
Logout feature as well.
Dashboard displays the logged user's name, list of groups, correct number of members and the group description.
Ability to add new organization/groups. Validations apply.
Logged user should have the capability to delete the groups he created.
Individual group page to display the name of the group, description, creator and the names of the members.
Ability to Join/Leave a group. The group individual page data on the members should also update once a user joins/leaves a group.
Group creator becomes the first member of the group. But he can leave the group he created.
You must be able to deploy your work to Amazon EC2 and provide the IP address or subdomain/domain name to where your work has been deployed. Please note that Heroku deployment is not honored.
'

remember to install gems:
rails-footnotes
simple_form
rspec
validates_timeliness

Remember to declare postgreSLQ database.
Ex: rails new DojoSecrets --database=postgresql --skip-test-unit #skip-test-unit is optional

Models:
User - first_name, last_name, email, password
has_many :organizations, dependent: :destroy # organization user has created
has_many :memberships, dependent: :destroy # membership objects
has_many :oganizations_joined, through: :memberships, source: :organization
# has_many :events_joined, through: :attending_events, source: :event # events user is attending through attending_events table

Membership - user:references, organization:references
belongs_to :user
belongs_to :organization

Organization - name, description, user:references
belongs_to :user
has_many :memberships, dependent: :destroy
has_many :user_members, through: :memberships, source: :user

!!!!Create database!!!!  Then migrate.

Controllers:
ApplicationController already created
Sessions controller
Users controller
Organizations controller
Memberships controller

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
