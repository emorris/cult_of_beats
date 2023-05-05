class CurrentUserSerializer
  include JSONAPI::Serializer
  attributes :user_name, :created_at, :email

  attribute :avatar do |user|
    if user.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_url(user.avatar, only_path: true)
    end
  end
  attribute :share_link_url do |user|
    Rails.application.routes.url_helpers.shared_link_url(user.user_profile.hashid)
  end
  
  attribute :user_profile do |user|
    UserProfileSerializer.new(user.user_profile)
  end
end