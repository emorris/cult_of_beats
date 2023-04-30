class CreateSharedContents < ActiveRecord::Migration[7.0]
  def change
    create_table :shared_contents do |t|
      t.belongs_to :user
      t.string :title
      t.string :source, index: true
      t.string :url
      t.string :image_url
      t.timestamps
    end
  end
end
