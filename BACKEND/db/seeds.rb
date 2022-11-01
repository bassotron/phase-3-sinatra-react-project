puts "🌱 Seeding games..."

10.times do 
	games = Game.create(
		title: Faker::Game.title,
		genre: Faker::Game.genre,
		platform: Faker::Game.platform
)

rand(1..5).times do
reviews = Review.create(
		score: rand(1..10),
		comment: Faker::Lorem.sentence,
		game_id: games.id
	)
 end 
end 
puts "✅ Done seeding!"
