class Organization < ActiveRecord::Base
  belongs_to :user
  has_many :memberships, dependent: :destroy
  has_many :user_members, through: :memberships, source: :user

  validates :name, :description, presence: true
  validates :name, length: { in: 5..100 }
  validates :description, length: { in: 10..500 }
end
