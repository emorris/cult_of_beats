class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.belongs_to :user
      t.string :name
      t.string :bio
      t.string :path_name
      t.jsonb :site_links, default: {}
      t.timestamps
    end
  end
end
