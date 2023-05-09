class SharedContentSerializer
  include JSONAPI::Serializer
  attributes :title, :image_url, :url, :user, :user_profile

  attribute :sm_embed do |c_shared|
    YouTubeRails.youtube_embed_url( c_shared.url , 220, 115)
  end

end