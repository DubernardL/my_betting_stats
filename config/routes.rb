Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :bets, only: [:index, :new, :create, :destroy]
  get '/pending_bets', to: 'bets#pendingBets', as: "pending_bets"
  put '/bets/:id', to: 'bets#lose', as: "lose"
  patch '/bets/:id', to: 'bets#win', as: "win"
end
