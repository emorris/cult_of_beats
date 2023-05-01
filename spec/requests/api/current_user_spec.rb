require 'rails_helper'

RSpec.describe "Api::CurrentUser", type: :request do
  
  describe "GET /api/current_user" do
    
    it "can not get current_user when user is not logged in" do
      get "/api/current_user"
      expect(response).not_to be_successful
    end
    
    it "it can get current_user when logged in" do 
      @user = FactoryBot.create(:user)
      sign_in @user
      get "/api/current_user"
      expect(response).to be_successful
      res = JSON.parse(response.body)
      expect(res['data']['id'].to_i).to eq(@user.id)
    end

  end
end
