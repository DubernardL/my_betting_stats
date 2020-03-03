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

    url = URI("https://api-football-v1.p.rapidapi.com/v2/odds/fixture/#{params['fixture']}")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Get.new(url)
    request["x-rapidapi-host"] = 'api-football-v1.p.rapidapi.com'
    request["x-rapidapi-key"] = '44316d2130msh21fed66e06e6a24p1dd597jsnf2e92ca6ac85'

    response = http.request(request)
    bookmakers = JSON.parse(response.read_body)["api"]["odds"].first["bookmakers"]
    unibet = bookmakers.select { |bookmaker| bookmaker.value?("Unibet") }.first
    @bets = unibet["bets"]
  end

end
