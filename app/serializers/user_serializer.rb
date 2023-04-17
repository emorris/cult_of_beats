class UserSerializer
    include JSONAPI::Serializer
    attributes :user_name, :created_at

    attribute :avatar do |user|
        Rails.application.routes.url_helpers.rails_blob_url(user.avatar, only_path: true)
    end
end