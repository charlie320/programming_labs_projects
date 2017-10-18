class UsersController < ApplicationController

  def index
    @user = current_user
    # @users = User.where.not("id = ?", @user.id)
    @users = User.where.not("id = ?", @user.id)

  end

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
      params.require(:register).permit(:name, :email, :description, :password)
    end

    def update_params
      params.require(:users).permit(:name, :email, :description, :password)
    end

    def auth
      return redirect_to events_path unless current_user.id == params[:id].to_i
    end
end
