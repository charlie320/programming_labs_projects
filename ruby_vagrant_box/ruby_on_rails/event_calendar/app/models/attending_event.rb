class AttendingEvent < ActiveRecord::Base
  belongs_to :user, required: true
  belongs_to :event, required: true
end
