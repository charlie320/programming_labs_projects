class PostsController < ApplicationController
  # before_action :auth, only: [:edit, :update, :destroy]
    def index
      @user = current_user
      @all_posts = Post.all


      # @in_state_events = Event.where(state: @my_state).eager_load(:user, :users)
      #  @other_state_events = Event.where.not(state: @my_state).eager_load(:user, :users)
    end

    def create
      post = Post.new(event_params)
      post.user = current_user

      if post.save
        redirect_to posts_path
      else
        flash[:notice] = post.errors.full_messages
        # puts event.errors.full_messages
        redirect_to posts_path
      end
    end

    def show
      @post = Post.find(params[:id])
      @post_count = @post.users.count  # Event.count
      @likers = @post.users
      @poster = User.find(@post.user_id)
    end

    def edit
      @post = Post.find(params[:id])
    end

    def update
      post = Post.update(params[:id], post_params)
      post.user = current_user
      if event.valid?
        redirect_to posts_path
      else
        flash[:notice] = post.errors.full_messages
        redirect_to posts_path
      end
    end

    def destroy
      post = Post.find(params[:id])
      post.destroy
      redirect_to posts_path
    end

    private
      def event_params
        params.require(:new_idea).permit(:content)
      end

      def auth
        post = Post.find(params[:id])
        return redirect_to posts_path unless current_user == post.user
      end
end
