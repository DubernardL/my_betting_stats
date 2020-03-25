Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :bets, only: [:index, :new, :create, :destroy]
  get '/pending_bets', to: 'bets#pendingBets', as: "pending_bets"
  get '/stats', to: 'pages#stats', as: "stats"
  post '/bets/:id/lose', to: 'bets#lose', as: "lose"
  post '/bets/:id/win', to: 'bets#win', as: "win"
end
