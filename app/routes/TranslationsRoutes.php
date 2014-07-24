<?php

Route::get(
  '/translate',
  array('as' => 'translate', 'uses' => 'TranslationController@translate')
);

Route::post(
  '/translate',
  array('as' => 'translate.update', 'uses' => 'TranslationController@update')
);

Route::get(
  '/lists',
  array('uses' => 'TranslationController@getlist')
);
