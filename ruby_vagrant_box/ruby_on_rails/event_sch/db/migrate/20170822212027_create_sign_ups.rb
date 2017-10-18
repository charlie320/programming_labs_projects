class CreateSignUps < ActiveRecord::Migration
  def change
    create_table :sign_ups do |t|
      t.references :user, index: true, foreign_key: true
      t.references :event, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
