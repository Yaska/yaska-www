@extends('layout')

@section('pagetitle', '')

@section('content')

<div class="block hero">
  {{ HTML::text('homepage.herotitle', 'h2') }}
  {{ HTML::text('homepage.herosubtitle', 'h3') }}
  {{-- <h3>{{ Lang::get('homepage.herosubtitle'); }}</h3> --}}
  <div class="macbookpro">
    <div class="flexslider">
      <ul class="slides">
        <li>
          <img src="images/png/p_arthur.png" alt="Arthur Lambillotte">
          <p class="flex-caption"><span class="name">Arthur Lambillotte</span><span class="position">{{ Lang::get('homepage.positiongraphic'); }}</span><span class="flavour">{{ Lang::get('homepage.flavourarthur'); }}</span></p>
        </li>
        <li>
          <img src="images/png/p_alexis.png" alt="Alexis Verbeke">
          <p class="flex-caption"><span class="name">Alexis Verbeke</span><span class="position">{{ Lang::get('homepage.positionconsultancy'); }}</span><span class="flavour">{{ Lang::get('homepage.flavouralexis'); }}</span></p>
        </li>
        <li>
          <img src="images/png/p_monika.png" alt="Monika Ostrowska">
          <p class="flex-caption"><span class="name">Monika Ostrowska</span><span class="position">{{ Lang::get('homepage.positionpoland'); }}</span><span class="flavour">{{ Lang::get('homepage.flavourmonika'); }}</span></p>
        </li>
        <li>
          <img src="images/png/p_eric.png" alt="Eric Ballet">
          <p class="flex-caption"><span class="name">Eric Ballet</span><span class="position">{{ Lang::get('homepage.positioncfo'); }}</span><span class="flavour">{{ Lang::get('homepage.flavoureric'); }}</span></p>
        </li>
        <li>
          <img src="images/png/p_david.png" alt="David Deren">
          <p class="flex-caption"><span class="name">David Deren</span><span class="position">{{ Lang::get('homepage.positiondev'); }}</span><span class="flavour">{{ Lang::get('homepage.flavourdavid'); }}</span></p>
        </li>
        <li>
          <img src="images/png/p_julien.png" alt="Julien vander Straeten">
          <p class="flex-caption"><span class="name">Julien vander Straeten</span><span class="position">{{ Lang::get('homepage.positionceo'); }}</span><span class="flavour">{{ Lang::get('homepage.flavourjulien'); }}</span></p>
        </li>
        <li>
          <img src="images/png/p_karl.png" alt="Karl Vossen">
          <p class="flex-caption"><span class="name">Karl Vossen</span><span class="position">{{ Lang::get('homepage.positionbackend'); }}</span><span class="flavour">{{ Lang::get('homepage.flavourkarl'); }}</span></p>
        </li>
        <li>
          <img src="images/png/p_laura.png" alt="Laura DeSchryver">
          <p class="flex-caption"><span class="name">Laura DeSchryver</span><span class="position">{{ Lang::get('homepage.positionsales'); }}</span><span class="flavour">{{ Lang::get('homepage.flavourlaura'); }}</span></p>
        </li>
        <li>
          <img src="images/png/p_pierre.png" alt="Pierre Van der Eecken">
          <p class="flex-caption"><span class="name">Pierre Van der Eecken</span><span class="position">{{ Lang::get('homepage.positiondev'); }}</span><span class="flavour">{{ Lang::get('homepage.flavourpierre'); }}</span></p>
        </li>
      </ul>
    </div>
  </div>
  {{ HTML::text('homepage.herointro', 'p', array('class' => 'blockintro')); }}{{ HTML::text('homepage.herotext', 'p', array('class' => 'blockintro')); }}
  <div class="centerrow">
    <a href="#services" class="btn darkblue">{{ Lang::get('homepage.herobutton'); }}</a>
    {{-- {{ HTML::text('homepage.herobutton', 'a', ['href' => '#services', 'class' => 'btn darkblue']); }} --}}
  </div>
  <div class="centerrow">
    <hr class="devider">
  </div>
</div>
<div class="block services" id="services">
  <h2>{{ Lang::get('homepage.servicetitle'); }}</h2>
  <div class="centerrow">
    <div class="blockheading">
      {{ HTML::text('homepage.servicetext', 'p'); }}{{ HTML::text('homepage.servicetext2', 'p'); }}
    </div>
  </div>
  <div class="servicescontainer">
    <div class="serviceblock codingservice">
      {{ HTML::text('homepage.servicecodingintro', 'p', array('class' => 'info bolder')); }}
      <hr class="devider">
      <img src="images/png/icn_coding.png" alt="coding" />
      {{ HTML::text('homepage.servicecodingtitle', 'h4', array('class' => 'servicetitle')); }}
      {{ HTML::text('homepage.servicecodingtext', 'p', array('class' => 'blockcontent')); }}
      <a href="#coding" class="btn blue">{{ Lang::get('homepage.servicebutton'); }}</a>
    </div>
    <div class="serviceblock supportservice">
      {{ HTML::text('homepage.servicesupportintro', 'p', array('class' => 'info bolder')); }}
      <hr class="devider">
      <img src="images/png/icn_support.png" alt="support" />
      {{ HTML::text('homepage.servicesupporttitle', 'h4', array('class' => 'servicetitle')); }}
      {{-- <div class="blockcontent">
        {{ HTML::text('homepage.servicesupporttext', 'p'); }}
        {{ HTML::text('homepage.servicesupportbold', 'span', array('class' => 'bolder')); }}
      </div> --}}
      <p class="blockcontent">{{ Lang::get('homepage.servicesupporttext'); }}<span class="bolder">&nbsp;{{ Lang::get('homepage.servicesupportbold'); }}</span></p>
      <a href="#support" class="btn green">{{ Lang::get('homepage.servicebutton'); }}</a>
    </div>
    <div class="serviceblock hostingservice">
      {{ HTML::text('homepage.servicehostingintro', 'p', array('class' => 'info bolder')); }}
      <hr class="devider">
      <img src="images/png/icn_hosting.png" alt="hosting" />
      <h4 class="servicetitle">{{ Lang::get('homepage.servicehostingtitle'); }}</h4>
      <p class="blockcontent">{{ Lang::get('homepage.servicehostingtext'); }}<span class="bolder">&nbsp;{{ Lang::get('homepage.servicehostingbold'); }}</span></p>
      <a href="#hosting" class="btn purple">{{ Lang::get('homepage.servicebutton'); }}</a>
    </div>
  </div>
</div>
<div class="block service supportservice" id="support">
  <div class="centerrow">
    <img src="images/png/icn_support_small.png" alt="support" />
  </div>
  <h2 class="servicetitle">{{ Lang::get('homepage.supporttitle'); }}</h2>
  <h3>{{ Lang::get('homepage.supportsubtitle'); }}</h3>
  <div class="centerrow narrow">
    <p class="blockheading">{{ Lang::get('homepage.supporttext'); }}</p>
  </div>
  <div class="featurecontainer">
    @for ($i = 0; $i < $supportitems; $i++)
      <div class="feature">
        <h4>{{ Lang::get('support.title_'.$i); }}</h4>
        @if (Lang::has('support.content_'.$i))
        <p class="blockcontent">{{ Lang::get('support.content_'.$i) }}</p>
        @else
        <p class="blockcontent"></p>
        @endif
      </div>
    @endfor
  </div>
  <div class="centerrow">
    <a href="#contact" class="btn green">{{ Lang::get('homepage.supportbutton'); }}</a>
  </div>
</div>
<div class="block service moresupport" id="moresupport">
  <h3>{{ Lang::get('homepage.supportsubtitle2'); }}<br/>{{ Lang::get('homepage.supportsubtitle2b'); }}</h3>
  <div class="featurecontainer">
    @for ($i = 0; $i < $moresupportitems; $i++)
      <div class="feature">
        <h4>{{ Lang::get('moresupport.title_'.$i); }}</h4>
        @if (Lang::has('moresupport.content_'.$i))
        <p class="blockcontent">{{ Lang::get('moresupport.content_'.$i) }}</p>
        @else
        <p class="blockcontent"></p>
        @endif
      </div>
    @endfor
  </div>
  <div class="centerrow">
    <a href="#contact" class="btn darkblue">{{ Lang::get('homepage.supportbutton2'); }}</a>
  </div>
  <div class="centerrow">
    <hr class="devider">
  </div>
</div>
<div class="block service codingservice" id="coding">
  <div class="centerrow">
    <img src="images/png/icn_coding_small.png" alt="coding">
  </div>
  <h2 class="servicetitle">{{ Lang::get('homepage.codingtitle'); }}</h2>
  <h3>{{ Lang::get('homepage.codingsubtitle'); }}</h3>
  <div class="centerrow narrow">
    <p class="blockheading">{{ Lang::get('homepage.codingtext'); }}</p>
    <p class="blockheading">{{ Lang::get('homepage.codingtext2'); }}</p>
  </div>
  <div class="centerrow" id="cases">
    <h3>{{ Lang::get('homepage.casestitle'); }}</h3>
  </div>
  <div class="casecontainer">
    <div class="case">
      <img src="{{ asset('images/png/nespresso.jpg') }}" alt="nespresso">
      <h4>{{ Lang::get('cases.title_0'); }}</h4>
      <p class="blockcontent">{{ Lang::get('cases.content_0'); }}</p>
    </div>
    <div class="case">
      <img src="{{ asset('images/png/ehealth.jpg') }}" alt="eklira">
      <h4>{{ Lang::get('cases.title_1'); }}</h4>
      <p class="blockcontent">{{ Lang::get('cases.content_1'); }}</p>
    </div>
    <div class="case">
      <img src="{{ asset('images/png/storyme.jpg') }}" alt="Storyme">
      <h4>{{ Lang::get('cases.title_2'); }}</h4>
      <p class="blockcontent">{{ Lang::get('cases.content_2'); }}</p>
    </div>
    <div class="case">
      <img src="{{ asset('images/png/c_you.png') }}" alt="you">
      <h4>{{ Lang::get('cases.title_3'); }}</h4>
      <p class="blockcontent">{{ Lang::get('cases.content_3'); }}</p>
    </div>
  </div>
  <div class="centerrow">
    <a href="#contact" class="btn blue">{{ Lang::get('homepage.casebutton'); }}</a>
  </div>
  <div class="centerrow">
    <hr class="devider">
  </div>
</div>
<div class="block service hostingservice" id="hosting">
  <div class="centerrow">
    <img src="images/png/icn_hosting_small.png" alt="hosting">
  </div>
  <h2 class="servicetitle">{{ Lang::get('homepage.hostingtitle'); }}</h2>
  <h3>{{ Lang::get('homepage.hostingsubtitle'); }}</h3>
  <div class="centerrow narrow">
    <p class="blockheading">{{ Lang::get('homepage.hostingtext'); }}</p>
  </div>
  <div class="centerrow">
    <h3 class="pullLeft">{{ Lang::get('homepage.hostingbodytitle1'); }}</h3>
  </div>
  <div class="checkcontainer">
    @for ($i = 0; $i < $hostingitems; $i++)
      @if (Lang::has('hostingcheck.hostingcheck'.$i))
      <div class="check">
        <img src="images/png/check.png" alt="check mark icon">
        <p class="blockcontent">{{ Lang::get('hostingcheck.hostingcheck'.$i); }}</p>
      </div>
      @endif
    @endfor
  </div>
  <h3 class="pullLeft">{{ Lang::get('homepage.hostingbodytitle2'); }}</h3>
  <div class="checkcontainer last">
    @for ($i = 0; $i < $qualityitems; $i++)
      @if (Lang::has('hostingcheck.hostingcheck'.$i))
      <div class="check">
        <img src="images/png/check.png" alt="check mark icon">
        <p class="blockcontent">{{ Lang::get('hostingcheck.hostingcheck'.$i); }}</p>
      </div>
      @endif
    @endfor
  </div>
  <div class="centerrow">
    <a href="#contact" class="btn purple">{{ Lang::get('homepage.hostingbutton'); }}</a>
  </div>
  <div class="centerrow">
    <hr class="devider">
  </div>
</div>
<div class="block clients" id="clients">
  <h2>Clients</h2>
  <div class="clientscontainer">
    <div class="client">
      <a href="http://www.nespresso-clubpromo.com">
        <img src="images/png/l_nespresso.png" alt="nespresso" />
      </a>
    </div>
    <div class="client">
      <a href="http://www.mp.com.pl">
        <img src="images/png/l_mp.png" alt="mp" />
      </a>
    </div>
    <div class="client">
      <a href="http://www.europeangreens.eu">
        <img src="images/png/l_EGP.png" alt="egp" />
      </a>
    </div>
    <div class="client">
      <a href="http://roeland.be/">
        <img src="images/png/l_roeland.png" alt="roeland" />
      </a>
    </div>
  </div>
  <div class="centerrow">
    <hr class="devider">
  </div>
</div>
<div class="block team" id="team">
  <h2>{{ Lang::get('homepage.teamtitle'); }}</h2>
  <div class="centerrow narrow">
    <p class="blockheading">{{ Lang::get('homepage.teamsubtitle'); }}</p>
  </div>
  <div class="teamcontainer">
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_julien.png" alt="Julien vander Straeten">
        <img class="alt" src="images/png/p_julien_alt.png" alt="Julien vander Straeten">
      </div>
      <h3>Julien vander Straeten</h3>
      <p class="blockcontent">{{ Lang::get('homepage.positionceo'); }}</p>
    </div>
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_eric.png" alt="Eric Ballet">
        <img class="alt" src="images/png/p_eric_alt.png" alt="Eric Ballet">
      </div>
      <h3>Eric Ballet</h3>
      <p class="blockcontent">{{ Lang::get('homepage.positioncfo'); }}</p>
    </div>
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_alexis.png" alt="Alexis Verbeke">
        <img class="alt" src="images/png/p_alexis_alt.png" alt="Alexis Verbeke">
      </div>
      <h3>Alexis Verbeke</h3>
      <p class="blockcontent">{{ Lang::get('homepage.positionconsultancy'); }}</p>
    </div>
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_monika.png" alt="Monika Ostrowska">
        <img class="alt" src="images/png/p_monika_alt.png" alt="Monika Ostrowska">
      </div>
      <h3>Monika Ostrowska</h3>
      <p class="blockcontent">{{ Lang::get('homepage.positionpoland'); }}</p>
    </div>
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_laura.png" alt="Laura DeSchryver">
        <img class="alt" src="images/png/p_laura_alt.png" alt="Laura DeSchryver">
      </div>
      <h3>Laura DeSchryver</h3>
      <p class="blockcontent">{{ Lang::get('homepage.positionsales'); }}</p>
    </div>
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_arthur.png" alt="Arthur Lambillotte">
        <img class="alt" src="images/png/p_arthur_alt.png" alt="Arthur Lambillotte">
      </div>
      <h3>Arthur Lambillotte</h3>
      <p class="blockcontent">{{ Lang::get('homepage.positiongraphic'); }}</p>
    </div>
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_david.png" alt="David Deren">
        <img class="alt" src="images/png/p_david_alt.png" alt="David Deren">
      </div>
      <h3>David Deren</h3>
      <p class="blockcontent">{{ Lang::get('homepage.positiondev'); }}</p>
    </div>
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_karl.png" alt="Karl Vossen">
        <img class="alt" src="images/png/p_karl_alt.png" alt="Karl Vossen">
      </div>
      <h3>Karl Vossen</h3>
      <p class="blockcontent">{{ Lang::get('homepage.positionbackend'); }}</p>
    </div>
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_pierre.png" alt="Pierre Van der Eecken">
        <img class="alt" src="images/png/p_pierre_alt.png" alt="Pierre Van der Eecken">
      </div>
      <h3>Pierre Van der Eecken</h3>
      <p class="blockcontent">{{ Lang::get('homepage.positiondev'); }}</p>
    </div>
    <div class="teammember">
      <div class="portrait">
        <img class="primary" src="images/png/p_you.png" alt="Pierre Van der Eecken">
        <img class="alt" src="images/png/p_you.png" alt="Pierre Van der Eecken">
      </div>
      <p class="blockcontent">{{ Lang::get('homepage.positionyou'); }}</p>
      <h3>{{ Lang::get('homepage.positionjoin'); }}</h3>
    </div>
  </div>
  <div class="factscontainer">
    <h3 class="pullLeft">{{ Lang::get('homepage.factstitle'); }}</h3>
    <ul>
      @for ($i = 0; $i < $factitems; $i++)
        @if (Lang::has('facts.fact'.$i))
        <li>
          <p>{{ Lang::get('facts.fact'.$i); }}</p>
        </li>
        @endif
      @endfor
    </ul>
    <div class="centerrow">
      <hr class="devider">
    </div>
  </div>
</div>
<div class="block contact" id="contact">
  <h2>{{ Lang::get('homepage.contacttitle'); }}</h2>
  <div class="centerrow narrow">
    <p class="blockheading">{{ Lang::get('homepage.contactsubtitle'); }}</p>
  </div>
  <div id="contactForm">
    <div class="insideContainer">
      <form id="form" name="contact" action="http://public.yaska.eu/post/post.php" method="post">
        <div class="inputDiv">
          <label for="company">{{ Lang::get('homepage.contactcompany'); }}</label>
          <input class="clearfix" type="text" name="company" id="company">
        </div>
        <div class="inputDiv">
          <label for="name">{{ Lang::get('homepage.contactname'); }}</label>
          <input class="clearfix" type="text" name="name" id="name">
        </div>
        <div class="inputDiv">
          <label for="email">{{ Lang::get('homepage.contactemail'); }}</label>
          <input class="clearfix" type="email" name="email" id="email" required="required">
        </div>
        <div class="inputDiv clearfix">
          <label for="phone">{{ Lang::get('homepage.contacttel'); }}</label>
          <input class="clearfix" type="tel" name="phone" id="phone">
        </div>
        <div class="textfield">
          <label for="message" id="messageLabel">{{ Lang::get('homepage.contactmessage'); }}</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <div class="centerrow">
          <input id="submit" type="submit" value="{{ Lang::get('homepage.contactbutton'); }}" class="btn darkblue clearfix">
        </div>
      </form>
    </div>
  </div>
</div>
<div class="block about" id="about">
  <div class="addresscontainer">
    <div class="centerrow">
      <h3 class="pullLeft">{{ Lang::get('homepage.yaskabelgium'); }}</h3>
    </div>
    <div class="address">
      <a href="http://maps.apple.com/?q=Dendermondsesteenweg+40+9000+Gent" target="_blank" class="blockcontent">{{ Lang::get('homepage.streetbelgium'); }}<br>{{ Lang::get('homepage.citybelgium'); }}</a>
      <p class="blockcontent">{{ Lang::get('homepage.telbelgium'); }}</p>
      <p class="blockcontent">{{ Lang::get('homepage.openingbelgium'); }}<br>{{ Lang::get('homepage.hoursbelgium'); }}</p>
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.845680397388!2d3.7422475999999882!3d51.05593719999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c376b57263ebb5%3A0x2eb89e417d6cacfa!2sDendermondsesteenweg+40!5e0!3m2!1sen!2s!4v1397758224395" frameborder="0" style="border:0"></iframe>
    </div>
  </div>
  <div class="centerrow">
    <hr class="devider">
  </div>
  <div class="addresscontainer">
    <div class="centerrow">
      <h3 class="pullLeft">{{ Lang::get('homepage.yaskapoland'); }}</h3>
    </div>
    <div class="address">
      <a href="http://maps.apple.com/?q=Postępu+21+Warszawa+Poland" target="_blank" class="blockcontent">{{ Lang::get('homepage.streetpoland'); }}<br>{{ Lang::get('homepage.citypoland'); }}</a>
      <p class="blockcontent">{{ Lang::get('homepage.telpoland'); }}</p>
      <p class="blockcontent">{{ Lang::get('homepage.openingpoland'); }}<br>{{ Lang::get('homepage.hourspoland'); }}</p>
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2446.3261190560784!2d20.9972728!3d52.1829446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719332673c39efd%3A0x4b16a8cdb2b27b67!2sul.+Post%C4%99pu+21a!5e0!3m2!1sen!2s!4v1397758772449" frameborder="0" style="border:0"></iframe>
    </div>
  </div>
</div>

@stop