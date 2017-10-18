class SessionsController < ApplicationController
before_action :require_login, only: [:destroy]

def index
end

def create
  @user = User.find_by_email(login_params[:email])
  if @user && @user.authenticate(login_params[:password])
    session[:user_id] = @user.id
    redirect_to events_path
  else
    flash[:errors] = ["Invalid Combination"]
    redirect_to sessions_path
  end
end

def destroy
  reset_session
  redirect_to sessions_path
end

private
  def login_params
    params.require(:login).permit(:email, :password)
  end
end
