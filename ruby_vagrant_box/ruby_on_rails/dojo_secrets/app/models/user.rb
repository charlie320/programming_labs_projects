class User < ActiveRecord::Base
  has_secure_password
  has_many :secrets #secrets I have created
  has_many :likes, dependent: :destroy #Like objects of all secrets I have liked
  has_many :secrets_liked, through: :likes, source: :secret # all secrets written by others that I have liked

  validates :name, presence: true
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX}

  before_save :downcase_fields

  def downcase_fields
     self.email.downcase!
  end
end
