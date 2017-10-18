class SignupsController < ApplicationController

  def create
    signup = Signup.new()
    signup.user = current_user
    signup.event = Event.find(params[:id])

    if signup.save
      redirect_to events_path
    else
      flash[:notice] = event.errors.full_messages
      redirect_to events_path
    end
  end

  def destroy
    signup = Signup.find_by(event_id: params[:id], user: current_user).delete
    redirect_to events_path
  end

end
