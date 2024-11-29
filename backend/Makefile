# Variables
APP_NAME = backend
DOCKER_COMPOSE = docker-compose
DJANGO_MANAGE = $(DOCKER_COMPOSE) run --rm $(APP_NAME) python manage.py

# Help command
default: help

.PHONY: help
help: ## Display this help message
	@echo "Available Commands:"
	@awk 'BEGIN {FS = ":.*?## "; printf "\n%-20s %s\n\n", "Target", "Description"} /^[a-zA-Z_-]+:.*?## / { printf "%-20s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

.PHONY: build
build: ## Build the Docker containers
	$(DOCKER_COMPOSE) build

.PHONY: up
up: ## Start Docker containers in detached mode
	$(DOCKER_COMPOSE) up -d

.PHONY: down
down: ## Stop Docker containers
	$(DOCKER_COMPOSE) down

.PHONY: migrate
migrate: ## Apply database migrations
	$(DJANGO_MANAGE) migrate

.PHONY: superuser
superuser: ## Create a Django superuser
	$(DJANGO_MANAGE) createsuperuser

.PHONY: shell
shell: ## Open Django shell within Docker container
	$(DJANGO_MANAGE) shell

.PHONY: test
test: ## Run Django tests
	$(DJANGO_MANAGE) test

.PHONY: lint
lint: ## Run Black and Flake8 linting tools
	docker run --rm -v $(shell pwd):/app black .
	docker run --rm -v $(shell pwd):/app --entrypoint flake8 backend

.PHONY: format
format: ## Run Black to auto-format code
	docker run --rm -v $(shell pwd):/app black .

.PHONY: logs
logs: ## View logs of Docker containers
	$(DOCKER_COMPOSE) logs -f

.PHONY: clean
clean: ## Remove dangling Docker images and containers
	docker system prune -f

db_reset: ## Reset the database (drops and re-creates)
	$(DJANGO_MANAGE) flush --no-input
	$(DJANGO_MANAGE) migrate

.PHONY: load_fixtures
load_fixtures: ## Load sample fixtures into the database
	$(DJANGO_MANAGE) loaddata sample_data.json

.PHONY: collectstatic
collectstatic: ## Collect static files for production
	$(DJANGO_MANAGE) collectstatic --no-input
