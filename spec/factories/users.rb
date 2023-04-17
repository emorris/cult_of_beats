FactoryBot.define do
    factory :user do
      email { Faker::Internet.email }
      user_name {Faker::Internet.username(specifier: 20, separators: ['-'])}
      avatar {Rack::Test::UploadedFile.new("spec/fixtures/images/avatar.png", "image/png")}
      password { "password" }
      confirmed_at {Time.now}
      created_at {Time.now}
    end
  end


 