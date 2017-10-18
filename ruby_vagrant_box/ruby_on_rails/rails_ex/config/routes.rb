Rails.application.routes.draw do

# Sessions
get "sessions" => "sessions#index", as: :sessions # Route to display all sessions and/or log in
  # get "sessions/new" => "sessions#new", as: :sessions_new # Route to render form for new session
post "sessions" => "sessions#create", as: :sessions_create # Route to create new session
  # get "sessions/:id" => "sessions#show", as: :sessions_show # Route to display session
  # get "sessions/:id/edit" => "sessions#edit", as: :sessions_edit # Route to form to update session profile
  # patch "sessions/:id" => "sessions#update", as: :sessions_update # Route to update session profile
delete "sessions" => "sessions#destroy", as: :sessions_destroy
get "/" => "sessions#index"

# Users
  get "users" => "users#index", as: :users # Route to display all users and/or log in
  # get "users/new" => "users#new", as: :users_new # Route to render form for new user
  post "users" => "users#create", as: :users_create # Route to create new user
  get "users/:id" => "users#show", as: :users_show # Route to display user
  # get "users/:id/edit" => "users#edit", as: :users_edit # Route to form to update user profile
  # patch "users/:id" => "users#update", as: :users_update # Route to update user profile
  # delete "users/:id" => "users#destroy", as: :users_destroy

# Networks
  get "networks" => "networks#index", as: :networks # Route to display all networks and/or log in
  # get "networks/new" => "networks#new", as: :networks_new # Route to render form for new network
  # post "networks" => "networks#create", as: :networks_create # Route to create new network
  # get "networks/:id" => "networks#show", as: :networks_show # Route to display network
  # get "networks/:id/edit" => "networks#edit", as: :networks_edit # Route to form to update network profile
  # patch "networks/:id" => "networks#update", as: :networks_update # Route to update network profile
  # delete "networks/:id" => "networks#destroy", as: :networks_destroy

# Invite
  # get "invites" => "invites#index", as: :invites # Route to display all invites and/or log in
  # get "invites/new" => "invites#new", as: :invites_new # Route to render form for new invite
  post "invites/:id" => "invites#create", as: :invites_create # Route to create new invite
  # get "invites/:id" => "invites#show", as: :invites_show # Route to display invite
  # get "invites/:id/edit" => "invites#edit", as: :invites_edit # Route to form to update invite profile
  # patch "invites/:id" => "invites#update", as: :invites_update # Route to update invite profile
  # delete "invites/:id" => "invites#destroy", as: :invites_destroy

end
