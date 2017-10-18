Rails.application.routes.draw do

# Session:
get "sessions" => "sessions#index", as: :sessions
post "sessions" => "sessions#create", as: :sessions_create # Route to create new session
delete "sessions" => "sessions#destroy", as: :sessions_destroy
get "/" => "sessions#index"

# User:
post "users" => "users#create", as: :users_create # Route to create new user
get "users/:id/edit" => "users#edit", as: :users_edit # Route to form to update user profile
patch "users/:id" => "users#update", as: :users_update # Route to update user profile

# Event:
get "events" => "events#index", as: :events # Route to display all events and/or log in
post "events" => "events#create", as: :events_create # Route to create new event
get "events/:id" => "events#show", as: :events_show # Route to display event
get "events/:id/edit" => "events#edit", as: :events_edit # Route to form to update event profile
patch "events/:id" => "events#update", as: :events_update # Route to update event profile
delete "events/:id" => "events#destroy", as: :events_destroy

# Signup:
post "signups/:id" => "signups#create", as: :signups_create # Route to create new signup
delete "signups/:id" => "signups#destroy", as: :signups_destroy

# Comments
post "events/:id/comments" => "comments#create", as: :comments_create # Route to create new comment

end
