class AddIndexToPathInUserProfile < ActiveRecord::Migration[7.0]
  def change
    add_index :user_profiles, :path_name
  end
end
