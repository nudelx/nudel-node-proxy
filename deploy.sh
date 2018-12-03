 git add .
 cp t.json token.json
 git add -f token.json
 git commit -am "make it better"
 git push heroku master
 git rm token.json
 git  commit -am "make it better after"
