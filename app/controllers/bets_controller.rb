class BetsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]

  def index
    @bets = Bet.where(user: current_user)
  end

  def new
    @bet = Bet.new
  end

  def create
    @bet = Bet.new(bet_params)
    @bet.user = current_user
    if @bet.save
     redirect_to new_bet_path
    else
      render :new
    end
  end

  def destroy
    @bets = Bet.where(user: current_user)
    @bet = @bets.find(params[:id])
    @bet.destroy
    redirect_to bets_path
  end

  private

  def bet_params
    params.require(:bet).permit(:league, :match, :name, :odd, :bet_amount)
  end
end
