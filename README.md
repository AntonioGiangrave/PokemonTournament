# Pokemon tournament

**Backend:** NodeJs + MongoDB + Redis + Mocha / Chai + Axios

**Frontend:** Vue + Vuetify + Vuex + VueRouter

**Docker infrastructure**: Frontend, Backend, MongoDB, Redis

The repository contains backend, frontend and the Docker configuration.
I chose to keep them all in the same project and git for convenience. I would manage a real project by keeping the projects separate.

## Frontend setup
```
cd frontend
npm i 
npm run build
```

## Backend setup
```
cd backend
npm i 
npm run build
```


## Launch application 
```
make docker_up

or

docker-compose -f docker-compose.yml up 

```
 go to **http://tet.snce.it:8080** or **http://127.0.0.1:8080** 


### Test
```
docker exec -it snce-backend npm run test
```


![preview](Screenshot.png)
