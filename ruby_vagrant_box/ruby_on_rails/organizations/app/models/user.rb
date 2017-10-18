class User < ActiveRecord::Base
  has_many :organizations, dependent: :destroy # organization user has created
  has_many :memberships, dependent: :destroy # membership objects
  has_many :organizations_joined, through: :memberships, source: :organization

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, presence: true
  validates :first_name, :last_name, length: { in: 2..100 }
  # validates_format_of :first_name, :last_name, with: /\A[-a-z]+\Z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX}
  validates :password, length: { in: 8..25 }


  def self.full_name
    return "#{self.first_name.titleize} #{self.last_name.titleize}"
  end
end
