Rails.application.routes.draw do
  
  namespace :api do
    resources :users
    resource :current_user, :controller => :current_user do 
      resources :user_profiles, shallow: true
      put "/password", to: "current_user#password"
      resources :shared_contents, shallow: true do 
        collection  do 
          post :preview, shallow: true
        end
      end
    end
  end

  get 'index', to: 'home#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  resources :shared_links, path: "/l/"

  
  get "*path", to: 'home#index', constraints: lambda { |request| !request.fullpath.include?('rails/active_storage') }

  root 'home#index'
end
