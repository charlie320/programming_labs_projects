class User < ActiveRecord::Base
  has_many :events, dependent: :destroy
  has_many :signups, dependent: :destroy
  has_many :events_joined, through: :signups, source: :event
  has_many :comments, dependent: :destroy

  has_secure_password

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :city, :state,  presence: true
  validates :first_name, :last_name, length: { in: 2..100 }
  validates_format_of :first_name, :last_name, with: /\A[-a-z]+\Z/i
  validates :state, length: { is: 2 }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX}
  validates :password, length: { in: 8..25 }
end
