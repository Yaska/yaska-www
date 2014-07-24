@extends('layout')

@section('pagetitle', '404 - ')

@section('content')

  <div class="insideContainer">
    <div id="beachBall">
      <img class="beachBallImg" src="{{ asset('/images/404/rainbow@2x.png') }}">
      <img class="beachBallImg rotating" src="{{ asset('/images/404/ray@2x.png') }}">
      <!-- <img class="beachBallImg" src="{{ asset('/images/404/highlight@2x.png') }}"> -->
    </div>
    <h3>The website is down for maintenance. Sorry for the inconvenience.</h3>
  </div>

@stop