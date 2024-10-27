FROM wordpress:latest

RUN rm -rf /var/lib/apt/lists/* \
  && mkdir -p /var/www/html/wp-content \
  && chown -R www-data:www-data /var/www/html/wp-content