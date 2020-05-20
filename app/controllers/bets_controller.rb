require 'unirest'

class BetsController < ApplicationController
  def index
    user_bets = Bet.where(user: current_user)
    @bets = user_bets.where.not(state: "pending").sort_by{ |bet| bet.updated_at }.reverse
  end

  def pendingBets
    @bets = Bet.where(user: current_user, state:"pending").reverse_order
  end

  def lose
    @bet = Bet.find(params[:id])
    @bet.state = "lose"
    if @bet.save
      respond_to do |format|
        format.html { redirect_to request.referrer, alert: "Result registred"}
        format.js
      end
    end
  end

  def win
    @bet = Bet.find(params[:id])
    @bet.state = "win"
    if @bet.save
      respond_to do |format|
        format.html { redirect_to request.referrer, alert: "Result registred"}
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

    if params[:bet][:combine] == "combine"
      @bet.combine = true
      @bet.name = "Combined"
    end

    if @bet.name === ""
      @bet.name = "Other bet"
    end

    @bet.odd = params['bet']['odd'].gsub(',' && '.', '.').to_f
    @bet.bet_amount = params['bet']['bet_amount'].gsub(',' && '.', '.').to_f

    if @bet.sport == ""
      respond_to do |format|
        format.html { redirect_to request.referrer, alert: "Don't let sport empty"}
        format.js
      end
    elsif @bet.odd == 0.0 || @bet.bet_amount == 0.0
      respond_to do |format|
        format.html { redirect_to request.referrer, alert: "Don't let Odd or Amount empty"}
        format.js
      end
    elsif @bet.save
      respond_to do |format|
        format.html { redirect_to request.referrer, alert: "Bet added !"}
        format.js
      end
    else
      respond_to do |format|
        format.html { redirect_to request.referrer, alert: "Don't let League or Match empty"}
        format.js
      end
    end
  end

  def destroy
    @bet = Bet.find(params[:id])
    @bet.destroy
    respond_to do |format|
      format.html { redirect_to request.referrer, alert: "Bet deleted"}
      format.js
    end
  end

  private

  def bet_params
    params.require(:bet).permit(:sport, :league, :match, :name, :odd, :bet_amount)
  end
end
