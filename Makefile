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

# ------------------------------------------------------------- #
# (image): DevCamper API
# ------------------------------------------------------------- #
devcamper-api-image_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash build

devcamper-api-image_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash build-prod

devcamper-api-image_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash run

devcamper-api-image_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash run-prod

devcamper-api-image_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash stop

devcamper-api-image_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/devcamper-api.bash clean

# ------------------------------------------------------------- #
# (image): Emaily User Feedback API
# ------------------------------------------------------------- #
emaily-user-feedback-api-image_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash build

emaily-user-feedback-api-image_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash build-prod

emaily-user-feedback-api-image_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash run

emaily-user-feedback-api-image_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash run-prod

emaily-user-feedback-api-image_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash stop

emaily-user-feedback-api-image_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/emaily-user-feedback-api.bash clean

# ------------------------------------------------------------- #
# (image): Events Showcase API
# ------------------------------------------------------------- #
events-showcase-api-image_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash build

events-showcase-api-image_build-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash build-prod

events-showcase-api-image_run:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash run

events-showcase-api-image_run-prod:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash run-prod

events-showcase-api-image_stop:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash stop

events-showcase-api-image_clean:
	@bash $(DOCKER_IMAGE_SCRIPTS)/events-showcase-api.bash clean

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

dj-events_compose-recreate-strapi-cms:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash recreate-strapi-cms

dj-events_compose-logs-ssr-service:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash logs-ssr-service

dj-events_compose-restart-ssr-service:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash restart-ssr-service
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash logs-ssr-service

dj-events_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash down

dj-events_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash down-prod

dj-events_compose-restore-database:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/dj-events-compose.bash restore-database

# ------------------------------------------------------------- #
# DynamoDB Training
# ------------------------------------------------------------- #
dynamodb-training_setup-aws-credentials:
	@bash tools/aws/setup-user.bash dynamodb-training

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
# (compose): Hello Payload CMS
# ------------------------------------------------------------- #
hello-payload-website-template_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-payload-website-template-compose.bash up

hello-payload-website-template_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-payload-website-template-compose.bash up-prod

hello-payload-website-template_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-payload-website-template-compose.bash down

hello-payload-website-template_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-payload-website-template-compose.bash down-prod

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



# ------------------------------------------------------------- #
# (compose): Select Dropdown App (Vite)
# ------------------------------------------------------------- #
select-dropdown-app-vite_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up select-dropdown-app-vite

select-dropdown-app-vite_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up-prod select-dropdown-app-vite

select-dropdown-app-vite_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down select-dropdown-app-vite

select-dropdown-app-vite_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down-prod select-dropdown-app-vite

# ------------------------------------------------------------- #
# (compose): Simple Shop
# ------------------------------------------------------------- #
simple-shop_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up simple-shop

simple-shop_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash up-prod simple-shop

simple-shop_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down simple-shop

simple-shop_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-compose.bash down-prod simple-shop

# Core build 
core_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/core.bash build

# Clean 
clean-all:
	@echo "Cleaning up..."
	@docker system prune -f
	@echo "Cleaned up!"
