# ----------------------------------------
build_image_core:
	bash ./tools/docker-image-scripts/core.bash build
# ----------------------------------------
# Backroads Tourcompany Landing Page
# ----------------------------------------
develop_compose_backroads-tourcompany-landing-page:
	bash ./tools/develop-compose-scripts/backroads-tourcompany-landingpage-compose.bash up

# ----------------------------------------
# Select Dropdown App (Parcel)
# ----------------------------------------
build_image_select-dropdown-app-parcel:
	bash ./tools/docker-image-scripts/select-dropdown-app-parcel.bash build
build_image_select-dropdown-app-parcel-prod:
	bash ./tools/docker-image-scripts/select-dropdown-app-parcel.bash build-prod

run_image_select-dropdown-app-parcel:
	bash ./tools/docker-image-scripts/select-dropdown-app-parcel.bash run
run_image_select-dropdown-app-parcel-prod:
	bash ./tools/docker-image-scripts/select-dropdown-app-parcel.bash run-prod