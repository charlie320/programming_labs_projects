class UserPlaylistsController < ApplicationController

  def create
    playlist_add = UserPlaylist.new()
    playlist_add.user_id = current_user.id
    playlist_add.song_id = params[:id]

    if playlist_add.save
      redirect_to songs_path
    else
      flash[:notice] = comment.errors.full_messages
      puts comment.errors.full_messages
      redirect_to songs_path
    end
  end

  def destroy
    playlist_add = UserPlaylist.find_by(song_id: params[:id], user: current_user).delete
    redirect_to songs_path
  end

end
