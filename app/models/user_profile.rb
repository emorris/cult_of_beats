class UserProfile < ApplicationRecord
  belongs_to :user
  
  SITE_LINK_TYPES = [
    :instagram, :soundcloud, :youtube, 
    :spotify, :tiktok
  ]
end
