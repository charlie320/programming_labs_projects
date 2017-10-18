class UsersController < ApplicationController
  skip_before_action :require_login, only: [:create]
  before_action :auth, except: [:create]

  def create
    user = User.new(user_params)
    if user.save
      redirect_to sessions_path
    else
      flash[:notice] = ["Can't be blank"]
      redirect_to sessions_path
    end
  end

  private
    def user_params
      params.require(:register).permit(:first_name, :last_name, :email, :password)
    end

    def auth
      return redirect_to organizations_path unless current_user.id == params[:id].to_i
    end
end
