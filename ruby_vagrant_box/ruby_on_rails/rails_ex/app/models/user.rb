class User < ActiveRecord::Base
  has_many :networks, dependent: :destroy
  has_many :connected_friends, through: :network, source: :user # connected users
  has_many :invites, dependent: :destroy
  has_many :invite_requests, through: :invites, source: :user

  has_secure_password
end
