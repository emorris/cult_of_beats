class Api::UserProfilesController < Api::RootController
  before_action :authenticate_user!
  def index
  end

  def show
  end

  def create
  end

  def update
    current_user.user_profile.update(profile_params)
  end

  private
  def profile_params
    params.require(:profile).permit(:user_name, :email, :avatar)
  end
end
