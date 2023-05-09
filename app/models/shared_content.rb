class SharedContent < ApplicationRecord
  belongs_to :user
  has_one :user_profile_shared_content, class_name: "UserProfileSharedContent"
  has_one :user_profile, through: :user_profile_shared_content

  def html_embed
    YouTubeRails.youtube_embed_url(self.url)
  end
end
