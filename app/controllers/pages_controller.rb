require 'uri'
require 'net/http'
require 'openssl'
require 'json'

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :fixture]
  include Fetch
  before_action :set_matchs

  def home
  end

  def fixture
    @match = @matchs.select { |match| match.value?(params['fixture'].to_i) }
  end

end
