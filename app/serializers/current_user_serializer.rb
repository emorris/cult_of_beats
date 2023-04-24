class CurrentUserSerializer
  include JSONAPI::Serializer
  attributes :user_name, :created_at, :email

  attribute :avatar do |user|
    if user.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_url(user.avatar, only_path: true)
    end
  end
end