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
$(eval $(call spa_template,emaily-user-feedback-app))
$(eval $(call spa_template,events-showcase-app))
$(eval $(call spa_template,filtered-gallery-app))
$(eval $(call spa_template,minesweeper-game-app))
$(eval $(call spa_template,redux-elegant-online-shop-app))
$(eval $(call spa_template,select-dropdown-app-parcel))
$(eval $(call spa_template,redux-shopping-cart))
$(eval $(call spa_template,spot-share-app))

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

define spa-fe-only-compose_template
$(1)_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash up $(1)

$(1)_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash up-prod $(1)

$(1)_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash down $(1)

$(1)_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash down-prod $(1)
endef

$(eval $(call spa-fe-only-compose_template,backroads-tourcompany-landingpage))
$(eval $(call spa-fe-only-compose_template,birthday-buddy))
$(eval $(call spa-fe-only-compose_template,color-generator))
$(eval $(call spa-fe-only-compose_template,dummy-blog))
$(eval $(call spa-fe-only-compose_template,form-user-list))
$(eval $(call spa-fe-only-compose_template,events-showcase))
$(eval $(call spa-fe-only-compose_template,frequently-asked-questions))
$(eval $(call spa-fe-only-compose_template,json-to-excel))
$(eval $(call spa-fe-only-compose_template,lorem-ipsum-generator))
$(eval $(call spa-fe-only-compose_template,megamenu-strapi-clone))
$(eval $(call spa-fe-only-compose_template,minesweeper-game))
$(eval $(call spa-fe-only-compose_template,navbar-basic))
$(eval $(call spa-fe-only-compose_template,reviews))
$(eval $(call spa-fe-only-compose_template,rnd-axios-http))
$(eval $(call spa-fe-only-compose_template,select-dropdown-app-vite))
$(eval $(call spa-fe-only-compose_template,shopping-cart-usereducer))
$(eval $(call spa-fe-only-compose_template,sidebar-and-modal-basic))
$(eval $(call spa-fe-only-compose_template,sidebar-tabs))
$(eval $(call spa-fe-only-compose_template,skill-saga))
$(eval $(call spa-fe-only-compose_template,slider-w-buttons))
$(eval $(call spa-fe-only-compose_template,to-do-list-grocery-buddy))
$(eval $(call spa-fe-only-compose_template,tours-booking))

define spa-fullstack-compose_template
$(1)_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fullstack-compose.bash up $(1)

$(1)_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fullstack-compose.bash up-prod $(1)

$(1)_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fullstack-compose.bash down $(1)

$(1)_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fullstack-compose.bash down-prod $(1)
endef

$(eval $(call spa-fullstack-compose_template,filtered-gallery))

# ------------------------------------------------------------- #
# (compose): Blog with Comments 
# ------------------------------------------------------------- #
blog-w-comments_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/blog-w-comments-compose.bash up blog-w-comments

blog-w-comments_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/blog-w-comments-compose.bash up-prod blog-w-comments

blog-w-comments_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/blog-w-comments-compose.bash down blog-w-comments

blog-w-comments_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/blog-w-comments-compose.bash down-prod blog-w-comments

# ------------------------------------------------------------- #
# (compose): Form User List
# ------------------------------------------------------------- #
# json-to-excel_compose-up:
# 	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash up json-to-excel	

# json-to-excel_compose-up-prod:
# 	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash up-prod json-to-excel

# json-to-excel_compose-down:
# 	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash down json-to-excel

# json-to-excel_compose-down-prod:
# 	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash down-prod json-to-excel


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
# (compose): Magic World
# ------------------------------------------------------------- #
magic-wrold_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/magic-world-compose.bash up

magic-wrold_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/magic-world-compose.bash up-prod

magic-wrold_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/magic-world-compose.bash down

magic-wrold_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/magic-world-compose.bash down-prod

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
# (compose): RND React Query & Tanstack To Do List App      
# ------------------------------------------------------------- #
rnd-react-query-n-tanstack-todo-list_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash up rnd-react-query-n-tanstack-todo-list

rnd-react-query-n-tanstack-todo-list_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash up-prod rnd-react-query-n-tanstack-todo-list

rnd-react-query-n-tanstack-todo-list_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash down rnd-react-query-n-tanstack-todo-list

rnd-react-query-n-tanstack-todo-list_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash down-prod rnd-react-query-n-tanstack-todo-list

# ------------------------------------------------------------- #
# (compose): Simple Shop
# ------------------------------------------------------------- #
simple-shop_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash up simple-shop

simple-shop_compose-up-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash up-prod simple-shop

simple-shop_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash down simple-shop

simple-shop_compose-down-prod:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/base-spa-fe-only-compose.bash down-prod simple-shop

# ------------------------------------------------------------- #
# (compose): Hello Wordpress
# ------------------------------------------------------------- #
hello-wordpress_compose-up:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-wordpress-compose.bash up hello-wordpress

hello-wordpress_compose-down:
	@bash $(DEVELOP_COMPOSE_SCRIPTS)/hello-wordpress-compose.bash down hello-wordpress

# Core build 
core_build:
	@bash $(DOCKER_IMAGE_SCRIPTS)/core.bash build

# tests
base-spa-fe-only-dev-setup-smoke-tests:
	@bash ./infrastructure/tests/base-spa-fe-only-dev-setup-smoke-tests.bash

base-spa-fullstack-dev-setup-smoke-tests:
	@bash ./infrastructure/tests/base-spa-fullstack-dev-setup-smoke-tests.bash

# Clean 
clean-all:
	@echo "Cleaning up..."
	@docker system prune -f
	@echo "Cleaned up!"
