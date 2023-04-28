class CreateSharedContents < ActiveRecord::Migration[7.0]
  def change
    create_table :shared_contents do |t|
      t.belongs_to :user
      t.string :link
      t.string :image_url
      t.timestamps
    end
  end
end
