.PHONY: core_build \
		backroads-tourcompany-landingpage_compose backroads-tourcompany-landingpage_build backroads-tourcompany-landingpage_run \
        select-dropdown-app-parcel_build select-dropdown-app-parcel_build-prod select-dropdown-app-parcel_run select-dropdown-app-parcel_run-prod \
        clean-all

# Variables for script paths
DOCKER_IMAGE_SCRIPTS = ./tools/docker-image-scripts
DEVELOP_COMPOSE_SCRIPTS = ./tools/develop-compose-scripts

# Core build 
core_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/core.bash build

# ----------------- Project Specific Commands ----------------- #
# ------------------------------------------------------------- #
# Backroads Tourcompany Landing Page 
# ------------------------------------------------------------- #
backroads-tourcompany-landingpage_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/backroads-tourcompany-landingpage-compose.bash up

backroads-tourcompany-landingpage_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/backroads-tourcompany-landingpage-compose.bash up-prod

backroads-tourcompany-landingpage_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/backroads-tourcompany-landingpage-compose.bash down

backroads-tourcompany-landingpage_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/backroads-tourcompany-landingpage-compose.bash down-prod

backroads-tourcompany-landingpage_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/backroads-tourcompany-landingpage.bash build

backroads-tourcompany-landingpage_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/backroads-tourcompany-landingpage.bash build-prod

backroads-tourcompany-landingpage_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/backroads-tourcompany-landingpage.bash run

backroads-tourcompany-landingpage_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/backroads-tourcompany-landingpage.bash run-prod

backroads-tourcompany-landingpage_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/backroads-tourcompany-landingpage.bash stop

backroads-tourcompany-landingpage_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/backroads-tourcompany-landingpage.bash clean

# ------------------------------------------------------------- #
# DevCamper
# ------------------------------------------------------------- #

devcamper-compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash up

devcamper-compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash up-prod

devcamper-compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash down

devcamper-compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash down-prod

devcamper-api_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash build

devcamper-api_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash build-prod

devcamper-api_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash run

devcamper-api_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash run-prod

devcamper-api_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash stop

devcamper-api_stop-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash stop-prod

devcamper-api_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash clean

# ------------------------------------------------------------- #
# Select Dropdown App (Parcel) 
# ------------------------------------------------------------- #
select-dropdown-app-parcel_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/select-dropdown-app-parcel.bash build

select-dropdown-app-parcel_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/select-dropdown-app-parcel.bash build-prod

select-dropdown-app-parcel_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/select-dropdown-app-parcel.bash run

select-dropdown-app-parcel_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/select-dropdown-app-parcel.bash run-prod

# Clean 
clean-all:
	@echo "Cleaning up..."
	@bash $(DOCKER_IMAGE_SCRIPTS)/core.bash clean
	@bash $(DOCKER_IMAGE_SCRIPTS)/backroads-tourcompany-landingpage.bash clean
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash clean
