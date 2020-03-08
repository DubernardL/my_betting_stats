require 'uri'
require 'net/http'
require 'openssl'
require 'json'

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]
  include Fetch
  before_action :set_matchs

  def home
  end
end
