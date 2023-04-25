class UserProfileSerializer
  include JSONAPI::Serializer
  attributes :name, :bio, :path_name, :site_links

end