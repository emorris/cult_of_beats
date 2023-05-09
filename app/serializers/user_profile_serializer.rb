class UserProfileSerializer
  include JSONAPI::Serializer
  attributes :name, :bio, :path_name, :site_links, :shared_contents

end