Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :bets, only: [:index, :new, :create, :destroy]
end
