class Event < ActiveRecord::Base
  belongs_to :user, required: true
  has_many :sign_ups, dependent: :destroy
  has_many :users, through: :sign_ups
  has_many :comments, dependent: :destroy

  validates :name, :city, :state,  presence: true
  validates :name, :city, length: { in: 2..100 }
  validates :state, length: { is: 2 }
  validates_date :date, :on => :create, :on_or_after => :today
end
