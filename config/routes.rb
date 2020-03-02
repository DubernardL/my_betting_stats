Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get "/:fixture", to: "pages#fixture", as: 'fixture'
end
