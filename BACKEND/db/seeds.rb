puts "🌱 Seeding spices..."

10.times do 
	game = Game.create(
		title: Faker::Game.title,
		genre: Faker::Game.genre,
		platform: Faker::Game.platform
)

rand(1..5).times do
	Review.create(
		score: rand(1..10),
		comment: Faker::Lorem.sentence,
		game_id: game.id
	)
 end 
end 
puts "✅ Done seeding!"
