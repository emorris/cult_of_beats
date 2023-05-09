class UserProfile < ApplicationRecord
  include Hashid::Rails
  belongs_to :user
  has_many :user_profile_shared_contents
  has_many :shared_contents, through: :user_profile_shared_contents
  
  SITE_LINK_TYPES = [
    :instagram, :soundcloud, :youtube, 
    :spotify, :tiktok
  ]

end
