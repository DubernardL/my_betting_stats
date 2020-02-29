puts "==========================="
puts "Destroying seed !!!"
puts "==========================="
User.destroy_all
puts "==========================="
puts "Seed destroyed !!!"
puts "==========================="


puts "==========================="
puts "Creating Users"
puts "==========================="

user1 = User.new(email:"lucas@gmail.com", password:"azerty")

user1.save!


puts "==========================="
puts "OK OK OK !!!"
puts "==========================="
