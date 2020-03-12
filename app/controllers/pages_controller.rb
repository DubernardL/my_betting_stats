require 'uri'
require 'net/http'
require 'openssl'
require 'json'

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    # All bets
    bets = Bet.where(user: current_user)

    # Bets count
    @allbets = bets.count

    # Pending bets
    @pending_bets = bets.where(state: "pending").count

    # Pending bets amount
    @pending_bets_amount = 0
    bets.where(state: "pending").each { |pending_bet| @pending_bets_amount += pending_bet.bet_amount }

    # Finished bets
    @finished_bets = bets.where.not(state: "pending").count

    # Total bets
    @total_bets = 0
    bets.each { |bet| @total_bets += bet.bet_amount }

    # Profit
    @profit = 0
    bets.each do |bet|
      if bet.state == "win"
        @profit += (bet.bet_amount * bet.odd) - bet.bet_amount
      else
        @profit -= bet.bet_amount
      end
    end
  end
end
