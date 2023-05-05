class User < ApplicationRecord
  include Hashid::Rails
  has_one_attached :avatar do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100]
  end
  has_many :shared_contents
  
  has_one :user_profile
  after_create :create_associations

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable, :omniauthable
        #  :confirmable, :lockable, 

  
  private
  def create_associations
    self.user_profile = UserProfile.new()
  end
end
