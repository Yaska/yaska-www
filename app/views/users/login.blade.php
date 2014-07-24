@extends('layout')

@section('pagetitle', 'login user - ')

@section('content')

<p>login</p>

{{-- {{ Form::open(['url' => LaravelLocalization::localizeURL('users/store')]) }} --}}
{{ Form::open(['route' => 'sessions.store']) }}

  <div class="form-group">
    {{ Form::label('username', 'Username:') }}
    {{ Form::text('username', null, ['class' => 'form-control', 'required' => 'required']) }}
  </div>
  <div class="form-group">
    {{ Form::label('password', 'Password:') }}
    {{ Form::password('password', null, ['class' => 'form-control']) }}
  </div>
  <div class="form-group">
    {{ Form::checkbox('remember_me', 'true', false, array('id' => 'remember_me')); }}
    {{ Form::label('remember_me', 'Remember me') }}
  </div>
  <div class="form-group">
    {{ Form::submit('Login') }}
  </div>

{{ Form::close() }}

@stop