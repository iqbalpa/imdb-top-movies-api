## build docker images
echo "docker build"
docker build -t imdb-api:v2 .

## run docker container
# nestjs app listen to port 3000
# docker expose port 3000
# localhost mapping port 8080 to port 3000 
# check your app in localhost:8080
echo "docker container run"
docker run -d --name imdb-api-v2 --restart=always -p 8080:3000 imdbi-ap:v2
