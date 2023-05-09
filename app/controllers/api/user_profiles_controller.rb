class Api::UserProfilesController < Api::RootController
  before_action :authenticate_user!
  def index
  end

  def show
  end

  def create
  end

  def update
    current_user.user_profile.update(user_profile_params)
    render json: {}
  end

  private
  def user_profile_params
    params.require(:user_profile).permit(
        :name, 
        :bio,
        site_links:[UserProfile::SITE_LINK_TYPES]
    )
  end
end
