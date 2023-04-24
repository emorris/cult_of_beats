class Api::UsersController < Api::RootController
  before_action :authenticate_user!
  def index
  end

  def show
  end
end
