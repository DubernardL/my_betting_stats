Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  put '/bets/:id', to: 'bets#win', as: "win"
  put '/bets/:id', to: 'bets#lose', as: "lose"
  resources :bets, only: [:index, :new, :create, :destroy]
  get '/pending_bets', to: 'bets#pendingBets', as: "pending_bets"
end
