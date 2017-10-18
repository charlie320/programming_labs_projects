class OrganizationsController < ApplicationController

  def index
    @user = current_user
    @organizations = Organization.all
  end

  def create
    @user = current_user
    org = Organization.new(org_params)
    org.user_id = @user.id

    if org.save
      join = Membership.new()
      join.user_id = @user.id
      join.organization_id = org.id
      join.save
      redirect_to organizations_path
    else
      flash[:errors] = org.errors.full_messages
      redirect_to organizations_path
    end


  end

  def show
    @user = current_user
    @organization = Organization.find(params[:id])
    @members = @organization.user_members
  end

  def destroy
    org = Organization.find(params[:id])
    org.destroy
    redirect_to organizations_path
  end

  private
    def org_params
      params.require(:org).permit(:name, :description)

    end

end
