class Event < ActiveRecord::Base
  belongs_to :user
  has_many :signups, dependent: :destroy
  has_many :users_attending, through: :signups, source: :user
  has_many :comments, dependent: :destroy

  validates_date :date, :on => :create, :on_or_after => :today
  validates :state, length: { is: 2 }
  validates :name, :city, :state,  presence: true
  validates :name, length: { in: 2..100 }
end
