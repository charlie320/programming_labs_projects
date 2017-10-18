Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

# Session
  post "sessions" => "sessions#create", as: :sessions_create
  delete "sessions" => "sessions#destroy", as: :sessions_destroy
  get "/" => "sessions#index", as: :sessions

# User
  post "users" => "users#create", as: :users_create # Route to create new user
  get "users/:id/edit" => "users#edit", as: :users_edit # Route to form to update user profile
  patch "users/:id" => "users#update", as: :users_update # Route to update user profile
  delete "users/:id" => "users#destroy", as: :users_destroy

# Event
  get "events" => "events#index", as: :events # Route to display all events and/or log in
  post "events" => "events#create", as: :events_create # Route to create new event
  get "events/:id" => "events#show", as: :events_show # Route to display event
  get "events/:id/edit" => "events#edit", as: :events_edit # Route to form to update event profile
  patch "events/:id" => "events#update", as: :events_update # Route to update event profile
  delete "events/:id" => "events#destroy", as: :events_destroy

# SignUp
  post "events/:id/sign_ups" => "sign_ups#create", as: :sign_ups_create # Route to create new sign_up
  delete "sign_ups/:id" => "sign_ups#destroy", as: :sign_ups_destroy

# Comment
  post "events/:id/comments" => "comments#create", as: :comments_create # Route to create new comment
  delete "comments/:id" => "comments#destroy", as: :comments_destroy
end
