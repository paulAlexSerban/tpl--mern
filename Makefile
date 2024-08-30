# Variables for script paths
DOCKER_IMAGE_SCRIPTS := ./tools/docker-image-scripts
DEVELOP_COMPOSE_SCRIPTS := ./tools/develop-compose-scripts

define site_template
$(1)_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash build $(1)

$(1)_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash build-prod $(1)

$(1)_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash run $(1)

$(1)_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash run-prod $(1)

$(1)_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash stop $(1)

$(1)_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-site.bash clean $(1)
endef

# Use the template for each site
$(eval $(call site_template,backroads-tourcompany-landingpage-site))
$(eval $(call site_template,devcamper-site))

define spa_template
$(1)_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build $(1)

$(1)_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash build-prod $(1)

$(1)_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run $(1)

$(1)_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash run-prod $(1)

$(1)_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash stop $(1)

$(1)_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-spa.bash clean $(1)
endef

# Use the template for each SPA app
$(eval $(call spa_template,birthday-buddy-app))
$(eval $(call spa_template,color-generator-app))
$(eval $(call spa_template,redux-counter))
$(eval $(call spa_template,dummy-blog-app))
$(eval $(call spa_template,duolingo-clone))
$(eval $(call spa_template,redux-elegant-online-shop-app))
$(eval $(call spa_template,emaily-user-feedback-app))
$(eval $(call spa_template,events-showcase-app))
$(eval $(call spa_template,minesweeper-game-app))
$(eval $(call spa_template,select-dropdown-app-parcel))
$(eval $(call spa_template,redux-shopping-cart))
$(eval $(call spa_template,spot-share-app))


define api_template
$(1)_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/$(1).bash build

$(1)_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/$(1).bash build-prod

$(1)_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/$(1).bash run

$(1)_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/$(1).bash run-prod

$(1)_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/$(1).bash stop

$(1)_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/$(1).bash clean
endef

$(eval $(call api_template,devcamper-api))
$(eval $(call api_template,emaily-user-feedback-api))
$(eval $(call api_template,events-showcase-api))

define mvc_service_template
$(1)_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash build $(1)

$(1)_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash build-prod $(1)

$(1)_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash run $(1)

$(1)_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash run-prod $(1)

$(1)_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash stop $(1)

$(1)_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/base-mvc-service.bash clean
endef

$(eval $(call mvc_service_template,ecommerce-monolith-mvc-ssr-service))

define spa-compose_template
$(1)_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up $(1)

$(1)_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up-prod $(1)

$(1)_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down $(1)

$(1)_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down-prod $(1)
endef

$(eval $(call spa-compose_template,birthday-buddy))
$(eval $(call spa-compose_template,color-generator))
$(eval $(call spa-compose_template,dummy-blog))
$(eval $(call spa-compose_template,events-showcase))
$(eval $(call spa-compose_template,minesweeper-game))

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
# (compose): DJ Events
# ------------------------------------------------------------- #
dj-events_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash up

dj-events_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash up-prod

dj-events_compose-recreate-ssr-service:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash recreate-ssr-service

dj-events_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash down

dj-events_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash down-prod

# ------------------------------------------------------------- #
# (compose): Ecommerce Monolith MVC
# ------------------------------------------------------------- #
ecommerce-monolith_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-mvc-service-compose.bash up ecommerce-monolith-mvc

ecommerce-monolith_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-mvc-service-compose.bash down ecommerce-monolith-mvc

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
# (compose): Flowrise Site
# ------------------------------------------------------------- #
flowrise-site_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/flowrise-site-compose.bash up

flowrise-site_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/flowrise-site-compose.bash up-prod

flowrise-site_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/flowrise-site-compose.bash down

flowrise-site_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/flowrise-site-compose.bash down-prod

# ------------------------------------------------------------- #
# (compose): Hello Strapi CMS
# ------------------------------------------------------------- #
hello-strapi_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-strapi-compose.bash up

hello-strapi_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-strapi-compose.bash up-prod

hello-strapi_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-strapi-compose.bash down

hello-strapi_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-strapi-compose.bash down-prod

# ------------------------------------------------------------- #
# (compose): My Next.js Site
# ------------------------------------------------------------- #
my-nextjs-site_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/my-nextjs-site-compose.bash up

my-nextjs-site_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/my-nextjs-site-compose.bash up-prod

my-nextjs-site_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/my-nextjs-site-compose.bash down

my-nextjs-site_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/my-nextjs-site-compose.bash down-prod

# Core build 
core_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/core.bash build

# Clean 
clean-all:
	@echo "Cleaning up..."
	@docker system prune -f
	@echo "Cleaned up!"
