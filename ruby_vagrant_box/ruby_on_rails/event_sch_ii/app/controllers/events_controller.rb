class EventsController < ApplicationController
before_action :auth, only: [:edit, :update, :destroy]

  def index
    @user = current_user
    @instate_events = Event.where(state: @user.state)
    @outstate_events = Event.where.not(state: @user.state)
  end


  def create
    event = Event.new(event_params)
    event.user = current_user

    if event.save
      redirect_to events_path
    else
      flash[:notice] = event.errors.full_messages
      redirect_to events_path
    end
  end

  def show
    @user = current_user
    @event = Event.find(params[:id])
    @attending_count = Signup.where("user_id = ? AND event_id = ?", @user.id, @event.id).count
    @attenders = @event.users_attending
    @all_comments = Comment.where("user_id = ? AND event_id = ?", @user.id, @event.id)
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    event = Event.update(params[:id], event_params)
    event.user = current_user
    if event.valid?
      redirect_to events_path
    else
      flash[:notice] = event.errors.full_messages
      redirect_to events_path
    end

  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    redirect_to events_path
  end

  private
    def event_params
      params.require(:new_event).permit(:name, :date, :city, :state)
    end

    def auth
      event = Event.find(params[:id])
      return redirect_to events_path unless current_user == event.user
    end
end
