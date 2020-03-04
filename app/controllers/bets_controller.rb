class BetsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]
  def new
    raise
  end

  def create
  end
end
