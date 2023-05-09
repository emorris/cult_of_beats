class SharedLinksController < ApplicationController
  layout 'shared_content'
  
  def index
  end
  
  def show
    @user_profile = UserProfile.includes(:shared_contents).find(params[:id])
    render :show
  end
end
