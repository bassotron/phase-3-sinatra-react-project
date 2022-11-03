class GameController < ApplicationController
set :default_content_type, 'application/json'

#games CRUD
	
get '/games' do
	games = Game.all
	games.to_json(include: :reviews)
end

post '/games' do
	game = Game.create(title:params[:title], genre:params[:genre], platform:params[:platform])
	game.to_json(include: :reviews)
end

patch '/games/:id' do
	games = Game.find(params[:id])
	games.update(title:params[:title])
	games.to_json
end
	
delete '/games/:id' do
	games = Game.destroy(params[:id])
	games.to_json(include: :reviews)
end 
		
	
#reviews CRUD

get '/reviews' do
	reviews = Review.all
	reviews.to_json
end

post '/reviews' do
	reviews = Review.create(score:params[:score], comment:params[:comment], games_id:params[:games_id])
	reviews.to_json
end
		
patch '/reviews/:id' do
	reviews = Review.find(params[:id])
	reviews.update(comment:params[:comment])
	reviews.to_json
end
			
delete '/reviews/:id' do
	reviews = Review.destroy(params[:id])
	reviews.to_json
end


end
