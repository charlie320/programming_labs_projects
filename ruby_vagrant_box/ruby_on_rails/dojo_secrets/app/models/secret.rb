class Secret < ActiveRecord::Base
  belongs_to :user
  has_many :likes, dependent: :destroy # use this to count likes
  has_many :users, through: :likes # use this to identify all users that have like secret
  validates :content, presence: true
end
