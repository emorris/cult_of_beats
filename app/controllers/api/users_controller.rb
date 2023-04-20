class Api::UsersController < Api::RootController
  before_action :authenticate_user!
  def index
    if current_user
      render json: UserSerializer.new(current_user)
    else
      render json: {}, status: 404
    end
  end
end
