class SharedContentSerializer
  include JSONAPI::Serializer
  attributes :title, :image_url, :url, :user, :user_profile

  attribute :small_embed do |c_shared|
    self.html_embed
  end

end