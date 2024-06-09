## build docker images
echo "docker build"
docker build -t imdb-api .

## run docker container
# nestjs app listen to port 3000
# docker expose port 3000
# localhost mapping port 8080 to port 3000 
# check your app in localhost:8080
docker run -d --name imdb-api --restart=always -p 8080:3000 imdbi-api:latest
