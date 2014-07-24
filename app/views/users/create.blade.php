@extends('layout')

@section('pagetitle', 'create user - ')

@section('content')

<p>registration</p>

{{-- {{ Form::open(['url' => LaravelLocalization::localizeURL('users/store')]) }} --}}
{{ Form::open(['route' => 'users.store']) }}

  <div class="form-group">
    {{ Form::label('username', 'Username:') }}
    {{ Form::text('username', null, ['class' => 'form-control', 'required' => 'required']) }}
  </div>
  <div class="form-group">
    {{ Form::label('email', 'Email:') }}
    {{ Form::text('email', null, ['class' => 'form-control']) }}
  </div>
  <div class="form-group">
    {{ Form::label('password', 'Password:') }}
    {{ Form::password('password', null, ['class' => 'form-control']) }}
  </div>
  <div class="form-group">
    {{ Form::label('password_confirmation', 'Repeat password:') }}
    {{ Form::password('password_confirmation', null, ['class' => 'form-control']) }}
  </div>
  <div class="form-group">
    {{ Form::submit('Create Account') }}
  </div>

{{ Form::close() }}

@stop