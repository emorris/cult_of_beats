class Api::SharedContentsController < Api::RootController
  before_action :authenticate_user!
  def index
  end

  def show
  end

  def create
    
    shared_content = SharedContent.new(share_content_params)
    current_user.shared_contents << shared_content
    render json: {}
  end

  def preview
    data = ContentPreviewService.new(params['shared_content']['link']).get_preview_json
    render json: data
  end

  def update
    shared_content = current_user.shared_contents.find(params[:id])
    shared_content.update(share_content_params)
    render json: {}
  end

  private
  def share_content_params
    params.require(:share_content).permit(
        :link
    )
  end
end
