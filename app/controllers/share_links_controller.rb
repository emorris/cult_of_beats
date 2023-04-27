class ShareLinksController < ApplicationController
  def index
  end
  
  def show
    render json: UserProfile.find(params[:id])
  end
end
