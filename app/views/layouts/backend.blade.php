<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('pagetitle')Yaska - Apple Consultants Network</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex" />
    <link href="{{ asset('bower_components/normalize.css/normalize.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/application.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/backoffice.css') }}" rel="stylesheet" type="text/css" />
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
    {{-- @if(Auth::check()) --}}
      data-ng-app="yaskaTest"
    {{-- @endif --}}
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
            </li>
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
          <!-- <div class="menu">
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
            </ul>
          </div> -->
          <div class="menu">
            <ul>
              <li>
                <a data-ui-sref="backoffice.clients">clients</a>
              </li>
              <li>
                <a data-ui-sref="backoffice.support">support</a>
              </li>
              <li>
                <a data-ui-sref="backoffice.coding">coding</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="backoffice">
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
    <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> -->
    <script>var q = "{{ asset('bower_components/jquery/dist/jquery.min.js')}}"; window.jQuery || document.write('<script src="'+q+'"><\/script>');</script>
    <script src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('bower_components/angular/angular.js') }}"></script>
    <script src="{{ asset('bower_components/angular-ui-router/release/angular-ui-router.min.js') }}"></script>
    <script src="{{ asset('bower_components/ng-file-upload/angular-file-upload.js') }}"></script>

    <script src="{{ asset('js/backend.js') }}"></script>

    <script src="{{ asset('bower_components/flexslider/jquery.flexslider.js') }}"></script>
    <script src="{{ asset('bower_components/konami-js/konami.js') }}"></script>
    <!--<script src="{{ asset('js/scripts.js') }}"></script>
    <script>
      (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
      e=o.createElement(i);r=o.getElementsByTagName(i)[0];
      e.src='//www.google-analytics.com/analytics.js';
      r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
      ga('create','UA-15326372-1');ga('send','pageview');
    </script>-->
  </body>
</html>
