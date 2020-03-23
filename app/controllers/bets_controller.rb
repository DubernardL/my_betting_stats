class BetsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]

  def index
    user_bets = Bet.where(user: current_user)
    @bets = user_bets.where.not(state: "pending").sort_by{ |bet| bet.updated_at }.reverse
  end

  def pendingBets
    @bets = Bet.where(user: current_user, state:"pending").reverse_order
  end

  def win
    @bet = Bet.find(params[:id])
    @bet.state = "win"
    if @bet.save
      respond_to do |format|
        format.html { redirect_to bets_path, alert: "Result registred"}
        format.js
      end
    end
  end

  def lose
    @bet = Bet.find(params[:id])
    @bet.state = "lose"
    if @bet.save
      respond_to do |format|
        format.html { redirect_to bets_path, alert: "Result registred"}
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
    params[:bet][:combine] == "combine" ? @bet.combine = true :  @bet.combine = false

    if @bet.league === ""
      @bet.league = "Other league"
    end
    if @bet.match === ""
      @bet.match = "Other match"
    end
    if @bet.name === ""
      @bet.name = "Other bet"
    end

    @bet.odd = params['bet']['odd'].gsub(',' && '.', '.').to_f
    @bet.bet_amount = params['bet']['bet_amount'].gsub(',' && '.', '.').to_f
    if @bet.save
      respond_to do |format|
        format.html { redirect_to new_bet_path, alert: "Bet added !"}
        format.js
      end
    else
      respond_to do |format|
        format.html { redirect_to new_bet_path, alert: "Oops problem ! Come back later pls :)"}
        format.js
      end
    end
  end

  def destroy
    @bet = Bet.find(params[:id])
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
