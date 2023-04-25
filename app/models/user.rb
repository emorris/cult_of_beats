class User < ApplicationRecord
  has_one_attached :avatar do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100]
  end
  
  has_one :user_profile

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable, :omniauthable
        #  :confirmable, :lockable, 

  after_create :create_associations


  private
  def create_associations
    self.create_user_profile!
  end
end
