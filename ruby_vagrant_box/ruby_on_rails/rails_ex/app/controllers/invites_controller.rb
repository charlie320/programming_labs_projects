class InvitesController < ApplicationController

  def create
    @user = current_user
    invite = Invite.new()
    invite.user = current_user
    invite.invitee_id = params[:id]

    if invite.save
      redirect_to users_path
    else
      flash[:notice] = invite.errors.full_messages
      redirect_to users_path
    end
  end

  private

end
