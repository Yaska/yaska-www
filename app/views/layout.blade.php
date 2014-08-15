<!doctype html>
<html lang="{{Config::get('app.locale')}}" class="no-js">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('pagetitle')Yaska - Apple Consultants Network</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
    <link rel="alternate" hreflang="{{{ $localeCode }}}" href="http://www.yaska.eu/{{{ $localeCode }}}" />
    @endforeach
    <link rel="alternate" href="http://www.yaska.eu/" hreflang="x-default" />
    <link href="{{ asset('bower_components/normalize.css/normalize.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/application.css') }}" rel="stylesheet" type="text/css" />
    <link rel="author" href="humans.txt" />
    <!--<script type='text/javascript'>
    (function (d, t) {
      var bh = d.createElement(t), s = d.getElementsByTagName(t)[0];
      bh.type = 'text/javascript';
      bh.src = '//www.bugherd.com/sidebarv2.js?apikey=gjiuytiwimptjyspw0nk5q';
      s.parentNode.insertBefore(bh, s);
      })(document, 'script');
    </script>-->
  </head>
  <body
    @if(Auth::check())
      ng-app="yaskaBackend"
    @endif
  >
    <!--[if lt IE 8]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <div class="container">
      <div class="header">
        <div class="top">
          <div class="network">
            <img src="{{ asset('images/png/acn.png') }}" alt="" id="acn">
          </div>
          <div class="local">
            <ul class="locallist">
            @if(Auth::check())
            <li>
              <p id="currentUser">{{ Auth::user()->username }}</p>
              {{ Form::open(array('route' => array('sessions.delete'), 'method' => 'delete')) }}
                {{ Form::submit('logout', array('id' => 'logout')) }}
              {{ Form::close() }}
            </li>
            <!-- <li class="logout">

            </li> -->
            @endif
            @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
              <li
                @if( $properties['name'] === LaravelLocalization::getCurrentLocaleName() )
                  class="active"
                @endif
              >
                <a rel="alternate" hreflang="{{$localeCode}}" href="{{LaravelLocalization::getLocalizedURL($localeCode) }}">{{{ $localeCode }}}</a>
              </li>
            @endforeach
            </ul>
          </div>
        </div>
        <div class="nav">
          <div class="logo">
            <a href="{{ route('homepage') }}">
              <img src="{{ asset('images/svg/logo.svg') }}" alt="Yaska logo">
            </a>
          </div>
          <div class="menu">
            <ul>
              <li>
                <a href="{{ route('homepage') }}#services">{{ Lang::get('homepage.menuservice'); }}</a>
              </li>
              <li>
                <a href="{{ route('homepage') }}#cases">{{ Lang::get('homepage.menucases'); }}</a>
              </li>
              <li>
                <a href="{{ route('homepage') }}#team">{{ Lang::get('homepage.menuteam'); }}</a>
              </li>
              <li>
                <a href="{{ route('homepage') }}#contact">{{ Lang::get('homepage.menucontact'); }}</a>
              </li>
              @if(Auth::check())
              <li>
                <a href="{{ route('backoffice') }}">Backoffice</a>
              </li>
              @endif
            </ul>
          </div>
        </div>
      </div>
      <div class="main">
        @yield('content')
      </div>
    </div>
    <div class="footer">
      <div class="copy">
        <p>&copy; <a class="hoveropacity" href="{{ route('homepage') }}" title="yaska">Yaska.eu</a></p>
      </div>
      <div class="social">
        <ul>
          <li>
            <a title="Yaska Twitter" class="hoveropacity" href="https://twitter.com/yaska_eu">
              <img src="{{ asset('images/png/s_twitter.png') }}" alt="twitter">
            </a>
          </li>
          <li>
            <a title="Yaska Facebook" class="hoveropacity" href="https://www.facebook.com/Yaska.eu">
              <img src="{{ asset('images/png/s_fb.png') }}" alt="facebook">
            </a>
          </li>
          <li>
            <a title="Yaska LinkedIn" class="hoveropacity" href="http://www.linkedin.com/company/yaska">
              <img src="{{ asset('images/png/s_in.png') }}" alt="linkedin">
            </a>
          </li>
          <li>
            <a class="hoveropacity" href="http://integralstudios.be" title="build by Integral Studios">&#9650;</a>
          </li>
        </ul>
      </div>
    </div>
    {{-- <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <img id="konami" src="{{ asset('images/png/konami.png') }}" alt="">
        <div class="modal-content">
          <div class="modal-body">
          @if(Auth::check())
            <h3>{{ Auth::user()->username }}</h3>
            <p>{{ Auth::user()->email }}</p>
            <a data-ui-sref="clients">clients</a>
            <a data-ui-sref="support">support</a>
            <div data-ui-view=""></div>
            {{ Form::open(array('route' => array('sessions.delete'), 'method' => 'delete')) }}
              {{ Form::submit('logout', array('class' => 'btn green')) }}
            {{ Form::close() }}
          @else
            {{ Form::open(array('route' => 'sessions.store', 'autocomplete' => 'off')) }}
              <div class="form-group">
                {{ Form::label('username', 'Username:') }}
                {{ Form::text('username', null, array('class' => 'form-control', 'required' => 'required')) }}
              </div>
              <div class="form-group">
                {{ Form::label('password', 'Password:') }}
                {{ Form::password('password', null, array('class' => 'form-control')) }}
              </div>
              <div class="form-group">
                <a class="btn blue" id="cancel-login" href="">cancel</a>
                {{ Form::submit('login', array('class' => 'btn green')) }}
              </div>
            {{ Form::close() }}
          @endif
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div> --}}
    <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> -->
    <script>var q = "{{ asset('bower_components/jquery/dist/jquery.min.js')}}"; window.jQuery || document.write('<script src="'+q+'"><\/script>');</script>
    <script src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    @if(Auth::check())
    <script src="{{ asset('bower_components/angular/angular.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    @endif
    <script src="{{ asset('bower_components/flexslider/jquery.flexslider.js') }}"></script>
    <script src="{{ asset('bower_components/konami-js/konami.js') }}"></script>
    <script src="{{ asset('js/scripts.js') }}"></script>
    <script> 
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ 
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), 
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) 
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
      ga('create', 'UA-15326372-1', 'auto'); 
      ga('send', 'pageview'); 
    </script>
  </body>
</html>
