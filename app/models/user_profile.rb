class UserProfile < ApplicationRecord
  include Hashid::Rails
  belongs_to :user
  
  SITE_LINK_TYPES = [
    :instagram, :soundcloud, :youtube, 
    :spotify, :tiktok
  ]

end
