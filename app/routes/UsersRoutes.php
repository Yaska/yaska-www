<?php

//Route::resource('users', 'UsersController');

Route::group(
  array(
    'prefix' => LaravelLocalization::setLocale(),
    'before' => array('LaravelLocalizationRedirectFilter', 'guest') // LaravelLocalization filter
  ),
  function () {
    Route::get(
      '/register',
      array('as' => 'users.create', 'uses' => 'UsersController@create')
    );
    Route::get(
      '/login',
      array('as' => 'sessions.create', 'uses' => 'SessionsController@create')
    );
  }
);

Route::group(array('before' => 'guest'), function () {

  Route::post(
    '/postRegister',
    array('as' => 'users.store', 'uses' => 'UsersController@store')
  );

  Route::post(
    '/postLogin',
    array('as' => 'sessions.store', 'uses' => 'SessionsController@store')
  );

});

Route::group(array('before' => 'auth'), function () {

  Route::delete(
    '/deleteSession',
    array('as' => 'sessions.delete', 'uses' => 'SessionsController@destroy')
  );

});