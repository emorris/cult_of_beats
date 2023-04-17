class Api::UsersController < Api::RootController
    def index
        render json: UserSerializer.new(User.all.limit(10))
    end
end
