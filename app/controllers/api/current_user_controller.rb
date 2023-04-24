class Api::CurrentUserController < Api::RootController
  before_action :authenticate_user!
  def index
    if current_user
      render json: UserSerializer.new(current_user)
    else
      render json: {}, status: 404
    end
  end

  def password
    current_user.update(
      password: params[:password],
      password_confirmation: params[:password_confirmation] 
    )
    render json: {}
  end

  def update
    debugger
  end
end
