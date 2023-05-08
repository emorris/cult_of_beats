class CreateUserProfileSharedContents < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profile_shared_contents do |t|
      t.belongs_to :user_profile
      t.belongs_to :shared_content
      t.timestamps
    end
  end
end
