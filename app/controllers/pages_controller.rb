require 'uri'
require 'net/http'
require 'openssl'
require 'json'

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    # All bets
    @bets = Bet.where(user: current_user)

    # Pending bets
    @pending_bets = @bets.where(state: "pending")

    # Pending bets amount
    @pending_bets_amount = 0
    @pending_bets.each { |pending_bet| @pending_bets_amount += pending_bet.bet_amount }

    # Finished bets
    @finished_bets = @bets.where.not(state: "pending")

    # Total bets
    @total_bets = 0
    @bets.each { |bet| @total_bets += bet.bet_amount }

    # Profit
    @profit = 0
    @bets.each do |bet|
      if bet.state == "win"
        @profit += (bet.bet_amount * bet.odd) - bet.bet_amount
      else
        @profit -= bet.bet_amount
      end
    end

    # Yield
    @yield = (@profit / @total_bets) * 100

    # Wining bets
    @wining_bets = @bets.where(state: "win")

    # Amount wining bets
    @win_bets_amount = 0
    @wining_bets.each { |bet| @win_bets_amount += (bet.bet_amount * bet.odd) - bet.bet_amount }

    # Percentage winning
    @finished_bets.count == 0 ? @percentage_win = 0 : @percentage_win = (@wining_bets.count * 100) / @finished_bets.count

    # Losing bets
    @losing_bets = @bets.where(state: "lose")

    # Amount losing bets
    @lose_bets_amount = 0
    @losing_bets.each { |bet| @lose_bets_amount += bet.bet_amount }

    # Percentage losing
    @finished_bets.count == 0 ? @percentage_lose = 0 : @percentage_lose = (@losing_bets.count * 100) / @finished_bets.count


    # Medium Odd
    odd_arr = []
    @bets.each { |bet| odd_arr << bet.odd }
    odd_arr.count == 0 ? @medium_odd = 0 :@medium_odd = odd_arr.inject(0){|sum,x| sum + x } / odd_arr.count

    # Medium odd Win
    odd_arr_win = []
    @wining_bets.each { |bet| odd_arr_win << bet.odd }
    odd_arr_win.count == 0 ? @medium_odd_win = 0 : @medium_odd_win = odd_arr_win.inject(0){|sum,x| sum + x } / odd_arr_win.count

    # Medium odd lose
    odd_arr_lose = []
    @losing_bets.each { |bet| odd_arr_lose << bet.odd }
    odd_arr_lose.count == 0 ? @medium_odd_lose = 0 : @medium_odd_lose = odd_arr_lose.inject(0){|sum,x| sum + x } / odd_arr_lose.count


    # Medium bet amount
    amount_arr = []
    @bets.each { |bet| amount_arr << bet.bet_amount }
    amount_arr.count == 0 ? @medium_amount = 0 : @medium_amount = amount_arr.inject(0){|sum,x| sum + x } / amount_arr.count

    # Medium bet win amount
    win_amount_arr = []
    @wining_bets.each { |bet| win_amount_arr << bet.bet_amount }
    win_amount_arr.count == 0 ? @medium_win_amount = 0 : @medium_win_amount = win_amount_arr.inject(0){|sum,x| sum + x } / win_amount_arr.count

    # Medium bet lose amount
    lose_amount_arr = []
    @losing_bets.each { |bet| lose_amount_arr << bet.bet_amount }
    lose_amount_arr.count == 0 ? @medium_lose_amount = 0 : @medium_lose_amount = lose_amount_arr.inject(0){|sum,x| sum + x } / lose_amount_arr.count

  end
end
