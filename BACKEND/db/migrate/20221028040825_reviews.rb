class Reviews < ActiveRecord::Migration[6.1]
  

def change
create_table :reviews do |t|

	t.integer :score
	t.string :comment 
	t.integer :games_id
	t.timestamps
  end
end
end
