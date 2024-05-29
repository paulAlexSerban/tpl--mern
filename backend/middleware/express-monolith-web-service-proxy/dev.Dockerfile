FROM nginx:latest

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

COPY ./default.dev.conf /etc/nginx/conf.d/default.conf
