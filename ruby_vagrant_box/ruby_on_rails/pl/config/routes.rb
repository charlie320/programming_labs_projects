Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Session RESTFUL ROUTES
  get "sessions" => "sessions#index", as: :sessions
  post "sessions" => "sessions#create", as: :sessions_create
  delete "sessions" => "sessions#destroy", as: :sessions_destroy
  get "/" => "sessions#index"

  # User RESTFUL ROUTES
  post "users" => "users#create", as: :users
  get "users/:id" => "users#show", as: :users_show

  # Song RESTFUL ROUTES
  get "songs" => "songs#index", as: :songs
  post "songs" => "songs#create", as: :songs_create
  get "songs/:id" => "songs#show", as: :songs_show

  # User_playlist RESTFUL ROUTES
  post "user_playlists/:id" => "user_playlists#create", as: :user_playlists_create

end
