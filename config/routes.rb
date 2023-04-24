Rails.application.routes.draw do
  
  namespace :api do
    resources :users
    resources :current_user do 
      put "/password", to: "current_user#password"
    end
  end

  get 'index', to: 'home#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  
  get '/*all', to: 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  root 'home#index'
end
