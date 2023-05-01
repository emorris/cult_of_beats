require 'rails_helper'

RSpec.describe "Api::UserProfile", type: :request do
  before(:each) do
    @user = FactoryBot.create(:user)
    @user_profile_id = @user.user_profile.id
    @temp_profile = FactoryBot.build(:user_profile)

  end
  
  after(:each) do
    sign_out @user
  end
  
  describe "PUT /api/current_user/user_profiles" do
    
    it "can not update profile when user is not logged in" do
      put "/api/user_profiles/#{@user_profile_id}", params:  {user_profile: @temp_profile }.as_json
      expect(response).not_to be_successful
    end
    
    it "it can get current_user when logged in" do 
      sign_in @user
      put "/api/user_profiles/#{@user_profile_id}", params: {user_profile: @temp_profile }.as_json
      @user.reload
      @user_profile =  @user.user_profile
      expect(@user_profile.name).to eq( @temp_profile.name)
      expect(@user_profile.bio).to eq( @temp_profile.bio)
      expect(@user_profile.site_links).to eq( @temp_profile.site_links)
    end

  end
end
