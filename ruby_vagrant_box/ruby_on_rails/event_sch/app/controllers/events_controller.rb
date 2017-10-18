class EventsController < ApplicationController
  # before_action :auth, only: [:edit, :update, :destroy]
    def index
      @user = current_user
      @in_state_events = Event.where(state: @user.state)
      @other_state_events = Event.where.not(state: @user.state)
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
      # @event_count = Event.joins(:sign_ups).where(events_id: @event.id)
      @event_count = SignUp.where(event_id: @event.id).count
      @attenders = @event.users
      @event_comments = Comment.where(event_id: @event.id)
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
