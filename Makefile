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
# (compose): Backroads Tourcompany Landing Page 
# ------------------------------------------------------------- #
birthday-buddy_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up birthday-buddy

birthday-buddy_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up-prod birthday-buddy

birthday-buddy_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down birthday-buddy

birthday-buddy_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down-prod birthday-buddy

# ------------------------------------------------------------- #
# (spa): Color Generator App
# ------------------------------------------------------------- #
color-generator-app_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build color-generator-app

color-generator-app_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build-prod color-generator-app

color-generator-app_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run color-generator-app

color-generator-app_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run-prod color-generator-app

color-generator-app_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop color-generator-app

color-generator-app_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean color-generator-app

# ------------------------------------------------------------- #
# (compose): Color Generator App
# ------------------------------------------------------------- #
color-generator_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up color-generator

color-generator_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up-prod color-generator

color-generator_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down color-generator

color-generator_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down-prod color-generator

# ------------------------------------------------------------- #
# (spa): Counter Redux
# ------------------------------------------------------------- #
counter-redux_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build counter-redux

counter-redux_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run counter-redux

counter-redux_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop counter-redux

counter-redux_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean counter-redux

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
devcamper_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash up

devcamper_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash up-prod

devcamper_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/devcamper-compose.bash down

devcamper_compose-down-prod:
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
# (spa): Dummy Blog App
# ------------------------------------------------------------- #
duolingo-clone_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build duolingo-clone

duolingo-clone_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run duolingo-clone

duolingo-clone_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop duolingo-clone

duolingo-clone_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean duolingo-clone

# ------------------------------------------------------------- #
# (compose): Dummy Blog App
# ------------------------------------------------------------- #
dummy-blog_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up dummy-blog

dummy-blog_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up-prod dummy-blog

dummy-blog_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down dummy-blog

dummy-blog_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down-prod dummy-blog

# ------------------------------------------------------------- #
# (service): Ecommerce Monolith MVC Service
# ------------------------------------------------------------- #
ecommerce-monolith-mvc-service_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash build ecommerce-monolith-mvc-service

ecommerce-monolith-mvc-service_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash build-prod ecommerce-monolith-mvc-service

ecommerce-monolith-mvc-service_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash run ecommerce-monolith-mvc-service

ecommerce-monolith-mvc-service_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash run-prod ecommerce-monolith-mvc-service

ecommerce-monolith-mvc-service_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash stop ecommerce-monolith-mvc-service

ecommerce-monolith-mvc-service_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash clean ecommerce-monolith-mvc-service

# ------------------------------------------------------------- #
# (compose): Ecommerce Monolith MVC
# ------------------------------------------------------------- #
ecommerce-monolith_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-mvc-service-compose.bash up ecommerce-monolith-mvc

ecommerce-monolith_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-mvc-service-compose.bash down ecommerce-monolith-mvc

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
emaily-user-feedback_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/emaily-user-feedback-compose.bash up

emaily-user-feedback_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/emaily-user-feedback-compose.bash up-prod

emaily-user-feedback_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/emaily-user-feedback-compose.bash down

emaily-user-feedback_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/emaily-user-feedback-compose.bash down-prod

# ------------------------------------------------------------- #
# (spa): Events Shocase
# ------------------------------------------------------------- #
events-showcase-app_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build events-showcase-app

events-showcase-app_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build-prod events-showcase-app

events-showcase-app_run:	
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run events-showcase-app

events-showcase-app_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run-prod events-showcase-app

events-showcase-app_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop events-showcase-app

events-showcase-app_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean events-showcase-app

# ------------------------------------------------------------- #
# (api): Events Shocase
# ------------------------------------------------------------- #
events-showcase-api_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash build

events-showcase-api_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash build-prod

events-showcase-api_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash run

events-showcase-api_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash run-prod

events-showcase-api_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash stop

events-showcase-api_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash clean

# ------------------------------------------------------------- #
# (compose): Events Shocase
# ------------------------------------------------------------- #
events-showcase_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up events-showcase

events-showcase_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up-prod events-showcase

events-showcase_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down events-showcase

events-showcase_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down-prod events-showcase

# ------------------------------------------------------------- #
# (spa): Minesweeper Game App
# ------------------------------------------------------------- #
minesweeper-game-app_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build minesweeper-game-app

minesweeper-game-app_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build-prod minesweeper-game-app

minesweeper-game-app_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run minesweeper-game-app

minesweeper-game-app_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run-prod minesweeper-game-app

minesweeper-game-app_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop minesweeper-game-app

minesweeper-game-app_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean minesweeper-game-app

# ------------------------------------------------------------- #
# (compose): Minesweeper Game App
# ------------------------------------------------------------- #
minesweeper-game_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up minesweeper-game

minesweeper-game_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up-prod minesweeper-game

minesweeper-game_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down minesweeper-game

minesweeper-game_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down-prod minesweeper-game

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
