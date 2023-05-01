FactoryBot.define do
  factory :user_profile do
    name { Faker::Name.name }
    bio {Faker::Internet.username(specifier: 20, separators: ['-'])}
    site_links {{ 
        instagram: "https://www.instagram.com/count_waldemar_daninsky/", 
        soundcloud: "https://soundcloud.com/waldemar-daninsky", 
        youtube: "https://www.youtube.com/@TokyoBeatniks", 
        spotify:"https://open.spotify.com/artist/71D6G27IzyW8Lc40nLLLLK", 
        tiktok:""
    }}
  end
end


