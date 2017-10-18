class ApplicationController < ActionController::Base
  before_action :require_login
  skip_before_action :require_login, only: [:index]
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # protect_from_forgery with: :null_session

  def current_user
    User.find(session[:user_id]) if session[:user_id]
    # User.eager_load(:events_joined).find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user

  private
    def require_login
      return redirect_to sessions_path unless session[:user_id]
    end
end
