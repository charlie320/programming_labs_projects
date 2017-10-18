class User < ActiveRecord::Base
  has_many :posts, dependent: :destroy # posts the user has created
  has_many :likes, dependent: :destroy # like objects
  has_many :posts_liked, through: :likes, source: :post # posts the user has liked

  has_secure_password

  # before_save :downcase_fields

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :name, :name_alias, presence: true
  validates :name, :name_alias, length: { in: 2..100 }
  # validates_format_of :name, with: /\A[-a-z]+\Z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX}
  # validates :password, length: { in: 8..25 }

  def downcase_fields
    self.name.downcase!
    self.name_alias.downcase!
    self.email.downcase!
  end
end
