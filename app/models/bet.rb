class Bet < ApplicationRecord
  belongs_to :user

  validates :sport, presence: true
  validates :league, presence: true
  validates :match, presence: true
  validates :name, presence: true
  validates :odd, presence: true
  validates :bet_amount, presence: true

end
