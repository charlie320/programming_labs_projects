class SignUpsController < ApplicationController
  def create
    attend = SignUp.new()
    attend.user = current_user
    attend.event = Event.find(params[:id])

    if attend.save
      redirect_to events_path
    else
      flash[:notice] = attend.errors.full_messages
      puts attend.errors.full_messages
      redirect_to events_path
    end
  end

  def destroy
    attend = SignUp.find_by(event_id: params[:id], user: current_user).delete
    redirect_to events_path
  end
end
