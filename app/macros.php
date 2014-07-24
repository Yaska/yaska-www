<?php

HTML::macro('text', function($model, $entity, $attributes = null) {
  $html = '<' .  $entity;
    if (sizeof($attributes) > 0) {
      foreach ($attributes as $key => $value) {
        $htmlElements = ' ' . $key . '="' . $value . '"';
        $html .= $htmlElements;
      }
    }
    if (Auth::check()) {
      $html .= ' data-edit-me="'. $model .'"';
    }
    $html .= ' data-lang="' . Config::get('app.locale') .'"';
  $html .= '>' . Lang::get($model) . '</' . $entity . '>';
  return $html;
  // {{ HTML::test('homepage.herotitle', 'h2') }}
});