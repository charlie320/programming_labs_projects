class Song < ActiveRecord::Base
  has_many :users, through: :user_playlists
  has_many :user_playlists

  @@times_added = 0
end
