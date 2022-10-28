class GameController < ApplicationController
set :default_content_type, 'application/json'
  
	get '/games' do
	  games = Game.all
	  games.to_json
	end

	
  
  get '/reviews' do
    reviews = Review.all
    reviews.to_json
  end

end
