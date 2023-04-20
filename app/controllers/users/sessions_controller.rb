# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
    respond_to :json
  
    private
  
    def respond_with(resource, _opts = {})
      if resource.persisted?
        # if current_user
        #   token = current_user.generate_jwt
        # end
  
        h = request.headers['Authorization']
        render json: { token: h, message: 'You are logged in.', user: current_user }, status: :ok
      else
        login_failed
      end
    end
  
    def login_failed
      render json: { message: 'Something went wrong.' }, status: :unauthorized
    end
  
    def respond_to_on_destroy
      log_out_success && return if current_user
  
      log_out_failure
    end
  
    def log_out_success
      render json: { message: 'You are logged out.' }, status: :ok
    end
  
    def log_out_failure
      render json: { message: 'Hmm nothing happened.' }, status: :unauthorized
    end
  end