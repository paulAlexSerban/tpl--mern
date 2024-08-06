build_image_core:
	bash ./tools/docker-image-scripts/core.bash build

build_image_select-dropdown-app-parcel:
	bash ./tools/docker-image-scripts/select-dropdown-app-parcel.bash build
build_image_select-dropdown-app-parcel-prod:
	bash ./tools/docker-image-scripts/select-dropdown-app-parcel.bash build-prod

run_image_select-dropdown-app-parcel:
	bash ./tools/docker-image-scripts/select-dropdown-app-parcel.bash run
run_image_select-dropdown-app-parcel-prod:
	bash ./tools/docker-image-scripts/select-dropdown-app-parcel.bash run-prod