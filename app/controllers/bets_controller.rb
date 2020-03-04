class BetsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]
  def new
    @bet = Bet.new
  end

  def create
  end
end
