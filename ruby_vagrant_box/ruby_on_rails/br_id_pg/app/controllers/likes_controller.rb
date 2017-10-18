class LikesController < ApplicationController

  def create
    like = Like.new()
    like.user = current_user
    like.event = Event.find(params[:id])

    if like.save
      redirect_to posts_path
    else
      flash[:notice] = like.errors.full_messages
      puts like.errors.full_messages
      redirect_to posts_path
    end
  end

  def destroy
    like = Like.find_by(post_id: params[:id], user: current_user).delete
    redirect_to posts_path
  end

end
