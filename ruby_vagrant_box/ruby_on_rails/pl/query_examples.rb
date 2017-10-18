Query Examples
Song.joins(:user_playlists).where('user_playlists.user_id = ?', [1]).select("songs.*, count(user_playlists.id)").group(:id)
Song.find_by_sql("select * from users")

2.3.1 :274 > user = User.find_by_sql("select * from users")
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| id | first_name | last_name | email         | password_digest                                          | created_at              | updated_at              |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| 1  | John       | Doe       | john@doe.com  | $2a$10$rmy78FbsjosCZOgY5MBStulEnPl6eMnDWPI8hm/MSvWPkn... | 2017-08-21 14:31:15 UTC | 2017-08-21 14:31:15 UTC |
| 2  | Jane       | Doe       | jane@doe.com  | $2a$10$yO54MclH2/Tl6UpO8bYBIuMgEPucqjmTeX6mfwLZbecZfR... | 2017-08-21 14:31:38 UTC | 2017-08-21 14:31:38 UTC |
| 3  | James      | Doe       | james@doe.com | $2a$10$LXV4UMxxfD32ky07XXeWs.tKnK980Gd2b9Hr05v5hi4tFP... | 2017-08-21 14:38:20 UTC | 2017-08-21 14:38:20 UTC |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
3 rows in set
2.3.1 :275 > user.each do |u|
2.3.1 :276 >     puts u.first_name
2.3.1 :277?>   end
John
Jane
James
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| id | first_name | last_name | email         | password_digest                                          | created_at              | updated_at              |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| 1  | John       | Doe       | john@doe.com  | $2a$10$rmy78FbsjosCZOgY5MBStulEnPl6eMnDWPI8hm/MSvWPkn... | 2017-08-21 14:31:15 UTC | 2017-08-21 14:31:15 UTC |
| 2  | Jane       | Doe       | jane@doe.com  | $2a$10$yO54MclH2/Tl6UpO8bYBIuMgEPucqjmTeX6mfwLZbecZfR... | 2017-08-21 14:31:38 UTC | 2017-08-21 14:31:38 UTC |
| 3  | James      | Doe       | james@doe.com | $2a$10$LXV4UMxxfD32ky07XXeWs.tKnK980Gd2b9Hr05v5hi4tFP... | 2017-08-21 14:38:20 UTC | 2017-08-21 14:38:20 UTC |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
3 rows in set
2.3.1 :278 > user.each do |u|
2.3.1 :279 >     p u.songs
2.3.1 :280?>   end
#<ActiveRecord::Associations::CollectionProxy [#<Song id: 1, title: "Thriller", author: "Michael Jackson", created_at: "2017-08-21 14:32:05", updated_at: "2017-08-21 14:32:05", count: 0>, #<Song id: 2, title: "Fly Me To The Moon", author: "Frank Sinatra", created_at: "2017-08-21 14:33:04", updated_at: "2017-08-21 14:33:04", count: 0>, #<Song id: 2, title: "Fly Me To The Moon", author: "Frank Sinatra", created_at: "2017-08-21 14:33:04", updated_at: "2017-08-21 14:33:04", count: 0>, #<Song id: 3, title: "New York State of Mind", author: "Billy Joel", created_at: "2017-08-21 14:33:27", updated_at: "2017-08-21 14:33:27", count: 0>, #<Song id: 3, title: "New York State of Mind", author: "Billy Joel", created_at: "2017-08-21 14:33:27", updated_at: "2017-08-21 14:33:27", count: 0>]>
#<ActiveRecord::Associations::CollectionProxy [#<Song id: 1, title: "Thriller", author: "Michael Jackson", created_at: "2017-08-21 14:32:05", updated_at: "2017-08-21 14:32:05", count: 0>, #<Song id: 3, title: "New York State of Mind", author: "Billy Joel", created_at: "2017-08-21 14:33:27", updated_at: "2017-08-21 14:33:27", count: 0>, #<Song id: 4, title: "At Last", author: "Etta James", created_at: "2017-08-21 14:33:46", updated_at: "2017-08-21 14:33:46", count: 0>]>
#<ActiveRecord::Associations::CollectionProxy [#<Song id: 1, title: "Thriller", author: "Michael Jackson", created_at: "2017-08-21 14:32:05", updated_at: "2017-08-21 14:32:05", count: 0>, #<Song id: 2, title: "Fly Me To The Moon", author: "Frank Sinatra", created_at: "2017-08-21 14:33:04", updated_at: "2017-08-21 14:33:04", count: 0>, #<Song id: 4, title: "At Last", author: "Etta James", created_at: "2017-08-21 14:33:46", updated_at: "2017-08-21 14:33:46", count: 0>, #<Song id: 5, title: "Yellow Submarine", author: "The Beattles", created_at: "2017-08-21 14:34:19", updated_at: "2017-08-21 14:34:19", count: 0>, #<Song id: 5, title: "Yellow Submarine", author: "The Beattles", created_at: "2017-08-21 14:34:19", updated_at: "2017-08-21 14:34:19", count: 0>]>
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| id | first_name | last_name | email         | password_digest                                          | created_at              | updated_at              |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| 1  | John       | Doe       | john@doe.com  | $2a$10$rmy78FbsjosCZOgY5MBStulEnPl6eMnDWPI8hm/MSvWPkn... | 2017-08-21 14:31:15 UTC | 2017-08-21 14:31:15 UTC |
| 2  | Jane       | Doe       | jane@doe.com  | $2a$10$yO54MclH2/Tl6UpO8bYBIuMgEPucqjmTeX6mfwLZbecZfR... | 2017-08-21 14:31:38 UTC | 2017-08-21 14:31:38 UTC |
| 3  | James      | Doe       | james@doe.com | $2a$10$LXV4UMxxfD32ky07XXeWs.tKnK980Gd2b9Hr05v5hi4tFP... | 2017-08-21 14:38:20 UTC | 2017-08-21 14:38:20 UTC |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
3 rows in set
2.3.1 :281 > user.each do |u|
2.3.1 :282 >     u.songs.each do |s|
2.3.1 :283 >       p s.title
2.3.1 :284?>     end
2.3.1 :285?>   end
"Thriller"
"Fly Me To The Moon"
"Fly Me To The Moon"
"New York State of Mind"
"New York State of Mind"
"Thriller"
"New York State of Mind"
"At Last"
"Thriller"
"Fly Me To The Moon"
"At Last"
"Yellow Submarine"
"Yellow Submarine"
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| id | first_name | last_name | email         | password_digest                                          | created_at              | updated_at              |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| 1  | John       | Doe       | john@doe.com  | $2a$10$rmy78FbsjosCZOgY5MBStulEnPl6eMnDWPI8hm/MSvWPkn... | 2017-08-21 14:31:15 UTC | 2017-08-21 14:31:15 UTC |
| 2  | Jane       | Doe       | jane@doe.com  | $2a$10$yO54MclH2/Tl6UpO8bYBIuMgEPucqjmTeX6mfwLZbecZfR... | 2017-08-21 14:31:38 UTC | 2017-08-21 14:31:38 UTC |
| 3  | James      | Doe       | james@doe.com | $2a$10$LXV4UMxxfD32ky07XXeWs.tKnK980Gd2b9Hr05v5hi4tFP... | 2017-08-21 14:38:20 UTC | 2017-08-21 14:38:20 UTC |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
3 rows in set
2.3.1 :286 >

2.3.1 :287 > users= User.all
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| id | first_name | last_name | email         | password_digest                                          | created_at              | updated_at              |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| 1  | John       | Doe       | john@doe.com  | $2a$10$rmy78FbsjosCZOgY5MBStulEnPl6eMnDWPI8hm/MSvWPkn... | 2017-08-21 14:31:15 UTC | 2017-08-21 14:31:15 UTC |
| 2  | Jane       | Doe       | jane@doe.com  | $2a$10$yO54MclH2/Tl6UpO8bYBIuMgEPucqjmTeX6mfwLZbecZfR... | 2017-08-21 14:31:38 UTC | 2017-08-21 14:31:38 UTC |
| 3  | James      | Doe       | james@doe.com | $2a$10$LXV4UMxxfD32ky07XXeWs.tKnK980Gd2b9Hr05v5hi4tFP... | 2017-08-21 14:38:20 UTC | 2017-08-21 14:38:20 UTC |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
3 rows in set
2.3.1 :288 > users.each do |u|
2.3.1 :289 >     u.songs.each do |s|
2.3.1 :290 >       p s.title
2.3.1 :291?>     end
2.3.1 :292?>   end
"Thriller"
"Fly Me To The Moon"
"Fly Me To The Moon"
"New York State of Mind"
"New York State of Mind"
"Thriller"
"New York State of Mind"
"At Last"
"Thriller"
"Fly Me To The Moon"
"At Last"
"Yellow Submarine"
"Yellow Submarine"
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| id | first_name | last_name | email         | password_digest                                          | created_at              | updated_at              |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
| 1  | John       | Doe       | john@doe.com  | $2a$10$rmy78FbsjosCZOgY5MBStulEnPl6eMnDWPI8hm/MSvWPkn... | 2017-08-21 14:31:15 UTC | 2017-08-21 14:31:15 UTC |
| 2  | Jane       | Doe       | jane@doe.com  | $2a$10$yO54MclH2/Tl6UpO8bYBIuMgEPucqjmTeX6mfwLZbecZfR... | 2017-08-21 14:31:38 UTC | 2017-08-21 14:31:38 UTC |
| 3  | James      | Doe       | james@doe.com | $2a$10$LXV4UMxxfD32ky07XXeWs.tKnK980Gd2b9Hr05v5hi4tFP... | 2017-08-21 14:38:20 UTC | 2017-08-21 14:38:20 UTC |
+----+------------+-----------+---------------+----------------------------------------------------------+-------------------------+-------------------------+
3 rows in set
2.3.1 :293 >

2.3.1 :320 > User.first.songs.uniq.each do |s|
2.3.1 :321 >     p s.title
2.3.1 :322?>   end
"Thriller"
"Fly Me To The Moon"
"New York State of Mind"
+----+------------------------+-----------------+-------------------------+-------------------------+-------+
| id | title                  | author          | created_at              | updated_at              | count |
+----+------------------------+-----------------+-------------------------+-------------------------+-------+
| 1  | Thriller               | Michael Jackson | 2017-08-21 14:32:05 UTC | 2017-08-21 14:32:05 UTC | 0     |
| 2  | Fly Me To The Moon     | Frank Sinatra   | 2017-08-21 14:33:04 UTC | 2017-08-21 14:33:04 UTC | 0     |
| 3  | New York State of Mind | Billy Joel      | 2017-08-21 14:33:27 UTC | 2017-08-21 14:33:27 UTC | 0     |
+----+------------------------+-----------------+-------------------------+-------------------------+-------+
3 rows in set
2.3.1 :323 >

2.3.1 :335 > user.each do |u|
2.3.1 :336 >     u.songs.distinct.each do |s|
2.3.1 :337 >       p s.title
2.3.1 :338?>     end
2.3.1 :339?>   end
"Thriller"
"Fly Me To The Moon"
"New York State of Mind"
+----+------------+-----------+--------------+-----------------------------------------------------------+-------------------------+-------------------------+
| id | first_name | last_name | email        | password_digest                                           | created_at              | updated_at              |
+----+------------+-----------+--------------+-----------------------------------------------------------+-------------------------+-------------------------+
| 1  | John       | Doe       | john@doe.com | $2a$10$rmy78FbsjosCZOgY5MBStulEnPl6eMnDWPI8hm/MSvWPknx... | 2017-08-21 14:31:15 UTC | 2017-08-21 14:31:15 UTC |
+----+------------+-----------+--------------+-----------------------------------------------------------+-------------------------+-------------------------+
1 row in set
2.3.1 :340 >
