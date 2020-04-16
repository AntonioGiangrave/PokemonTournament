# ------------ DOCKER ACTIONS ------------

docker_down:
	docker-compose -f docker-compose.yml down --remove-orphans

docker_up:
	make docker_down
	docker-compose -f docker-compose.yml up

docker_up_detached:
	make docker_down
	docker-compose -f docker-compose.yml up -d

# ------------ DOCKER ACTIONS ------------



start:
	# npm run dev
	make docker_up_detached
	
