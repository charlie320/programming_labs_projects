class User < ActiveRecord::Base
  has_many :songs, through: :user_playlist
  has_one :user_playlist

  has_secure_password
end
