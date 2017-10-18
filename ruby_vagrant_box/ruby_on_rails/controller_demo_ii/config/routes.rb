Rails.application.routes.draw do

  get 'comments' => 'comments#index'

  get 'comments/index'

  get 'comments/new'

  get 'comments/edit'

  get 'users' => 'users#index'

  # get "products" => "products#index"
  # get "products/new" => "products#new"
  # post "products" => "products#create"
  # get "products/:id" => "products#show"
  # get "products/:id/edit" => "products#edit"
  # patch "products/:id" => "products#update"
  # delete "products/:id" => "products#destroy"

end
