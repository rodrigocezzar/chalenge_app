class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :classification
      t.integer :rating
      t.decimal :price

      t.timestamps
    end
  end
end