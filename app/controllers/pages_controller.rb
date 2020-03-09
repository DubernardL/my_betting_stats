require 'uri'
require 'net/http'
require 'openssl'
require 'json'

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    @bets = Bet.where(user: current_user)
  end
end
