class BetsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]

  def index
    user_bets = Bet.where(user: current_user)
    @bets = user_bets.where.not(state: "pending")
  end

  def pendingBets
    @bets = Bet.where(user: current_user, state:"pending")
  end

  def win
    @bet = Bet.find(params[:id])
    @bet.state = "win"
    if @bet.save
      respond_to do |format|
        format.html { redirect_to pending_bets_path, alert: "Result registred"}
        format.js
      end
    end
  end

  def lose
    @bet = Bet.find(params[:id])
    @bet.state = "lose"
    if @bet.save
      respond_to do |format|
        format.html { redirect_to pending_bets_path, alert: "Result registred"}
        format.js
      end
    end
  end

  def new
    @bet = Bet.new
  end

  def create
    @bet = Bet.new(bet_params)
    @bet.user = current_user
    if @bet.save
     respond_to do |format|
        format.html { redirect_to new_bet_path, alert: "Bet added !"}
        format.js
      end
    else
      respond_to do |format|
        format.html { redirect_to new_bet_path, alert: "Try replacing points with commas pls"}
        format.js
      end
    end
  end

  def destroy
    @bets = Bet.where(user: current_user)
    @bet = @bets.find(params[:id])
    @bet.destroy
    respond_to do |format|
      format.html { redirect_to bets_path, alert: "Bet deleted"}
      format.js
    end
  end

  private

  def bet_params
    params.require(:bet).permit(:league, :match, :name, :odd, :bet_amount)
  end
end
