class Post < ActiveRecord::Base
  has_many :likes, dependent: :destroy
  has_many :users, through: :likes
  belongs_to :user

  validates :content, length: { in: 2..500 }
end
