Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # get "users" => "users#index", as: :users # Route to display all users and/or log in
  # get "users/new" => "users#new", as: :users_new # Route to render form for new user
  post "users" => "users#create", as: :users_create # Route to create new user
  get "users/:id" => "users#show", as: :users_show # Route to display user
  # get "users/:id/edit" => "users#edit", as: :users_edit # Route to form to update user profile
  # patch "users/:id" => "users#update", as: :users_update # Route to update user profile
  # delete "users/:id" => "users#destroy"

  get "posts" => "posts#index", as: :posts # Route to display all posts and/or log in
  # get "users/new" => "posts#new", as: :posts_new # Route to render form for new post
  post "posts" => "posts#create", as: :posts_create # Route to create new post
  get "posts/:id" => "posts#show", as: :posts_show # Route to display post
  # get "posts/:id/edit" => "posts#edit", as: :posts_edit # Route to form to update post profile
  # patch "posts/:id" => "posts#update", as: :posts_update # Route to update post profile
  delete "posts/:id" => "posts#destroy"

  get "/" => "sessions#index", as: :sessions # Login/registration page
  post "sessions" => "sessions#create", as: :sessions_create # Login/registration method route
  delete "sessions/:id" => "sessions#destroy", as: :sessions_destroy # Logout method route


  post "likes" => "likes#create", as: :likes_create # Route to create new user
  delete "likes/:id" => "likes#destroy", as: :likes_destroy


end
