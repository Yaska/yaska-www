## Yaska WWW
===

### Prerequisites

* NodeJs with npm and packages:
	* gulp
* php 5.4 with mcrypt extention
* composer
* mysql
* apache or nginx

### Dev prerequisites

* Ruby with gems:
	* sass
	* bourbon 3.1.8
	`sudo gem install bourbon -v 3.1.8`
	* neat 1.5.0
	`sudo gem install neat -v 1.5.0`
	
### Development

in terminal
`cd [project root]`
`sudo npm install`
`bower install`
`bourbon install`
`neat install`
`gulp watch`

### Composer installation

```
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```

### Install framework 

1. Download vendor files

	`composer install`

2. Give Apache user access to storage files

	`sudo chown -R www-data:www-data app/storage/`


### Database

1. make database with name: yaskalaravel
2. create the migration database: `php artisan migrate:install`
3. migrate the translation tables: `php artisan migrate --package=waavi/translation`
4. migrate the other tables and seed them: `php artisan migrate --seed`
5. load the translations from the json files: `php artisan translator:load`

### Server setttings

Apache
```
<Directory "[yourLocalhostDirectory]">
    Options Indexes MultiViews
    AllowOverride None
    Order allow,deny
    Allow from all
    Options +FollowSymLinks
</Directory>
```
