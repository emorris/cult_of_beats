class Api::CurrentUserController < Api::RootController
  before_action :authenticate_user!
  def show
    if current_user
      render json: CurrentUserSerializer.new(current_user)
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
    current_user.update(user_params)
  end

  private

    def user_params
      params.require(:user).permit(:user_name, :email, :avatar)
    end
end
