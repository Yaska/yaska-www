<?php

Route::group(
  array(
    'prefix' => LaravelLocalization::setLocale(),
    'before' => 'LaravelLocalizationRedirectFilter' // LaravelLocalization filter
  ),
  function () {
    Route::get(
      '/',
      array('as' => 'homepage', 'uses' => 'HomeController@homepage')
    );

    if (App::environment('local')) {
    }
    App::missing(function ($exception) {
      return Response::view('404');
    });
  }
);

Route::group(array('before' => 'auth'), function () {

  Route::get(
    '/partials/{partial}',
    array('uses' => 'HomeController@partial'/*, 'before' => 'auth'*/)
  );
  Route::get(
    'backoffice',
    array('as' => 'backoffice', 'uses' => 'HomeController@backoffice')
  );
  Route::get(
    'backoffice/{all}',
    array('uses' => 'HomeController@backoffice', 'where' => '.*')
  );
  Route::post(
    '/uploadd',
    array('uses' => 'HomeController@upload')
  );

});

Route::get(
  '/thankyou',
  array('as' => 'thankyou', 'uses' => 'HomeController@thankyou')
);

//Route::resource('users', 'UsersController');

//if (App::environment('local')) {
  if (!defined('DS')) {
    define('DS', DIRECTORY_SEPARATOR);
  }

  foreach (new DirectoryIterator(__DIR__.DS.'routes') as $file)
  {
    if (!$file->isDot() && !$file->isDir() && $file->getFilename() != '.gitignore')
    {
      require_once __DIR__.DS.'routes'.DS.$file->getFilename();
    }
  }
//}