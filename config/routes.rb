Rails.application.routes.draw do
  
  namespace :api do
    resources :users do 
     resources :user_profiles, shallow: true
    end
    resource :current_user, :controller => :current_user do 
      put "/password", to: "current_user#password"
    end
  end

  get 'index', to: 'home#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  resources :share_links, path: "/l/"

  
  get "*path", to: 'home#index', constraints: lambda { |request| !request.fullpath.include?('rails/active_storage') }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  root 'home#index'
end
