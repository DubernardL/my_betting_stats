class CreateBets < ActiveRecord::Migration[5.2]
  def change
    create_table :bets do |t|
      t.string :sport
      t.string :league
      t.string :match
      t.string :name
      t.string :odd
      t.string :bet_amount
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end