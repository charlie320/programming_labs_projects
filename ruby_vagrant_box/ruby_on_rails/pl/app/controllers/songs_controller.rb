class SongsController < ApplicationController

  def index
    @user = current_user
    @all_songs = Song.order(id: :DESC).eager_load(:users)
  end

  def create
    song = Song.new(song_params)
    song.count = 0
    if song.save
      redirect_to songs_path
    else
      flash[:notice] = event.errors.full_messages
      redirect_to songs_path
    end
  end

  def show
    @song = Song.find(params[:id])
    @users = User.joins(:user_playlist).where('user_playlists.song_id = ?', [@song.id]).select('users.*, count(user_playlists.id) as number').group(:id)
  end


  private
    def song_params
      params.require(:new_song).permit(:title, :author)
    end

end
