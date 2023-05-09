class SharedContent < ApplicationRecord
  belongs_to :user
  belongs_to :user_profile_shared_content
  has_one :user_profile, through: :user_profile_shared_content
end
