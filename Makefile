# Variables for script paths
DOCKER_IMAGE_SCRIPTS = ./tools/docker-image-scripts
DEVELOP_COMPOSE_SCRIPTS = ./tools/develop-compose-scripts

# Core build 
core_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/core.bash build

# ----------------- Project Specific Commands ----------------- #
# ------------------------------------------------------------- #
# (site): Backroads Tourcompany Landing Page 
# ------------------------------------------------------------- #
backroads-tourcompany-landingpage-site_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash build backroads-tourcompany-landingpage-site

backroads-tourcompany-landingpage-site_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash build-prod backroads-tourcompany-landingpage-site

backroads-tourcompany-landingpage-site_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash run backroads-tourcompany-landingpage-site

backroads-tourcompany-landingpage-site_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash run-prod backroads-tourcompany-landingpage-site

backroads-tourcompany-landingpage-site_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash stop backroads-tourcompany-landingpage-site

backroads-tourcompany-landingpage-site_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash clean backroads-tourcompany-landingpage-site

# ------------------------------------------------------------- #
# (compose): Backroads Tourcompany Landing Page 
# ------------------------------------------------------------- #
backroads-tourcompany-landingpage_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/backroads-tourcompany-landingpage-compose.bash up

backroads-tourcompany-landingpage_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/backroads-tourcompany-landingpage-compose.bash up-prod

backroads-tourcompany-landingpage_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/backroads-tourcompany-landingpage-compose.bash down

backroads-tourcompany-landingpage_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/backroads-tourcompany-landingpage-compose.bash down-prod

# ------------------------------------------------------------- #
# (spa): Backroads Tourcompany Landing Page 
# ------------------------------------------------------------- #
birthday-buddy-app_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build birthday-buddy-app

birthday-buddy-app_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build-prod birthday-buddy-app

birthday-buddy-app_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run birthday-buddy-app

birthday-buddy-app_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run-prod birthday-buddy-app

birthday-buddy-app_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop birthday-buddy-app

birthday-buddy-app_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean birthday-buddy-app


# ------------------------------------------------------------- #
# (site): DevCamper
# ------------------------------------------------------------- #
devcamper-site_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash build devcamper-site

devcamper-site_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash build-prod devcamper-site

devcamper-site_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash run-prod devcamper-site

devcamper-site_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash run-prod devcamper-site

devcamper-site_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash stop devcamper-site

devcamper-site_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash clean devcamper-site

# ------------------------------------------------------------- #
# (api): DevCamper
# ------------------------------------------------------------- #
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
# (compose): DevCamper
# ------------------------------------------------------------- #
devcamper-compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash up

devcamper-compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash up-prod

devcamper-compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash down

devcamper-compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash down-prod

# ------------------------------------------------------------- #
# (spa): Dummy Blog App
# ------------------------------------------------------------- #
dummy-blog-app_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build dummy-blog-app

dummy-blog-app_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build-prod dummy-blog-app

dummy-blog-app_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run dummy-blog-app

dummy-blog-app_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run-prod dummy-blog-app

dummy-blog-app_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop dummy-blog-app

dummy-blog-app_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean dummy-blog-app


# ------------------------------------------------------------- #
# (spa): Emaily User Feedback App
# ------------------------------------------------------------- #
emaily-user-feedback-app_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build emaily-user-feedback-app

emaily-user-feedback-app_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build-prod emaily-user-feedback-app

emaily-user-feedback-app_run:	
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run emaily-user-feedback-app

emaily-user-feedback-app_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run-prod emaily-user-feedback-app

emaily-user-feedback-app_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop emaily-user-feedback-app

emaily-user-feedback-app_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean emaily-user-feedback-app

# ------------------------------------------------------------- #
# (api): Emaily User Feedback App
# ------------------------------------------------------------- #
emaily-user-feedback-api_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash build

emaily-user-feedback-api_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash build-prod

emaily-user-feedback-api_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash run

emaily-user-feedback-api_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash run-prod

emaily-user-feedback-api_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash stop

emaily-user-feedback-api_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash clean

# ------------------------------------------------------------- #
# (compose): Emaily User Feedback App
# ------------------------------------------------------------- #
emaily-user-feedback-compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/emaily-user-feedback-compose.bash up

emaily-user-feedback-compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/emaily-user-feedback-compose.bash up-prod

emaily-user-feedback-compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/emaily-user-feedback-compose.bash down

emaily-user-feedback-compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/emaily-user-feedback-compose.bash down-prod


# ------------------------------------------------------------- #
# (spa): Select Dropdown App (Parcel) 
# ------------------------------------------------------------- #
select-dropdown-app-parcel_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build select-dropdown-app-parcel

select-dropdown-app-parcel_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build-prod select-dropdown-app-parcel

select-dropdown-app-parcel_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run select-dropdown-app-parcel

select-dropdown-app-parcel_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run-prod select-dropdown-app-parcel

select-dropdown-app-parcel_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop select-dropdown-app-parcel

select-dropdown-app-parcel_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean select-dropdown-app-parcel

# ------------------------------------------------------------- #
# (spa): Spot Share SPA App
# ------------------------------------------------------------- #

spot-share-app_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/spot-share-app.bash build

# Clean 
clean-all:
	@echo "Cleaning up..."
	@docker system prune -f
	@echo "Cleaned up!"
