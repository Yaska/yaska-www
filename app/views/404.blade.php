@extends('layout')

@section('pagetitle', '404 - ')

@section('content')

  <div class="insideContainer errorPage">
    <div id="beachBall">
      <img class="beachBallImg" src="{{ asset('/images/404/rainbow@2x.png') }}">
      <img class="beachBallImg rotating" src="{{ asset('/images/404/ray@2x.png') }}">
      <!-- <img class="beachBallImg" src="{{ asset('/images/404/highlight@2x.png') }}"> -->
    </div>
    <h3 class="oops">Oops. We couldn't find the page you were looking for.</h3>
  </div>

  <div class="centerrow">
    <a href="{{ route('homepage') }}" class="btn green">{{ Lang::get('homepage.visithomepage'); }}</a>
    <a href="{{ route('homepage') }}#contact" class="btn darkblue">{{ Lang::get('homepage.contactus'); }}</a>
  </div>

@stop