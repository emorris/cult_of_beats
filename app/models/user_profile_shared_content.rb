class UserProfileSharedContent < ApplicationRecord
  belongs_to :user_profile
  belongs_to :shared_content
end
