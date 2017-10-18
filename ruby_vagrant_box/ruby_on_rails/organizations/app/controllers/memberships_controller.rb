class MembershipsController < ApplicationController

  def create
    @user = current_user
    join = Membership.new()
    join.user_id = @user.id
    join.organization_id = params[:id]

    if join.save
      redirect_to organizations_show_path(params[:id])
    else
      flash[:notice] = event.errors.full_messages
      # puts event.errors.full_messages
      redirect_to organizations_show_path(params[:id])
    end

  end

  def destroy
    @user = current_user
    unjoin = Membership.where("user_id = ? AND organization_id = ?", @user.id, params[:id]).delete_all

    redirect_to organizations_show_path(params[:id])
  end

end
