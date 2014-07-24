## Yaska WWW
===

### Prerequisites

* NodeJs with npm and packages:
	* gulp
* Ruby with gems:
	* sass
	* bourbon
	* neat
* php 5.4 with mcrypt extention
* composer
* mysql
* apache or nginx

### Download vendor files

1. run `composer update`
2. chmod the app/storage files


### Database

1. make database with name: yaskalaravel
2. create the migration database: `php artisan migrate:install`
3. migrate the translation tables: `php artisan migrate --package=waavi/translation`
4. migrate the other tables and seed them: `php artisan migrate --seed`
5. load the translations from the json files: `php artisan translator:load`


### Assets

`sudo npm install`


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
