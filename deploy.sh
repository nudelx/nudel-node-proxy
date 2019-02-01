heroku config:set client_id=19a5af6cbb334d7b9d53c95d779185ca
heroku config:set client_secret=210054f94ce9458ebb3fb2abc8da7561
heroku config:set redirect_uri=http://localhost:5000/spotify/callback

 git add .
 git commit -am "make it better"
 git push heroku master
