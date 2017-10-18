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
    # get "users" => "users#index", as: :users # Route to display all users and/or log in
    # get "users/new" => "users#new", as: :users_new # Route to render form for new user
    post "users" => "users#create", as: :users_create # Route to create new user
    # get "users/:id" => "users#show", as: :users_show # Route to display user
    # get "users/:id/edit" => "users#edit", as: :users_edit # Route to form to update user profile
    # patch "users/:id" => "users#update", as: :users_update # Route to update user profile
    # delete "users/:id" => "users#destroy", as: :users_destroy

  # Organizations
    get "organizations" => "organizations#index", as: :organizations # Route to display all organizations and/or log in
    # get "organizations/new" => "organizations#new", as: :organizations_new # Route to render form for new organization
    post "organizations" => "organizations#create", as: :organizations_create # Route to create new organization
    get "organizations/:id" => "organizations#show", as: :organizations_show # Route to display organization
    # get "organizations/:id/edit" => "organizations#edit", as: :organizations_edit # Route to form to update organization profile
    # patch "organizations/:id" => "organizations#update", as: :organizations_update # Route to update organization profile
    delete "organizations/:id" => "organizations#destroy", as: :organizations_destroy

  # Memberships
    # get "memberships" => "memberships#index", as: :memberships # Route to display all memberships and/or log in
    # get "memberships/new" => "memberships#new", as: :memberships_new # Route to render form for new membership
    post "memberships/:id" => "memberships#create", as: :memberships_create # Route to create new membership
    # get "memberships/:id" => "memberships#show", as: :memberships_show # Route to display membership
    # get "memberships/:id/edit" => "memberships#edit", as: :memberships_edit # Route to form to update membership profile
    # patch "memberships/:id" => "memberships#update", as: :memberships_update # Route to update membership profile
    delete "memberships/:id" => "memberships#destroy", as: :memberships_destroy

end
