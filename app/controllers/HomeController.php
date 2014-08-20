<?php

use \Waavi\Translation\Models\LanguageEntry;

class HomeController extends BaseController {

	public function homepage()
	{
		//$locale = \LaravelLocalization::getCurrentLocaleName();

		//dd($locale);

		//$translations = \Waavi\Translation\Models\LanguageEntry::with('language')->where('name', $locale)->get();

		//$translations = \Waavi\Translation\Models\Language::with('entries')->where('name', $locale)->first();

		//dd($translations->toArray());

    $supportitems = LanguageEntry::whereHas(
      'language',
      function($q) {
        $q->where('locale', Config::get('app.locale'));
      }
    )
    ->where('group', 'support')
    //->whereRaw("item regexp '(title)'")
    ->count();
    $supportitems = round($supportitems/2);

    //dd($supportitems);

    $moresupportitems = LanguageEntry::whereHas(
      'language',
      function($q) {
        $q->where('locale', Config::get('app.locale'));
      }
    )
    ->where('group', 'moresupport')
    //->whereRaw("item regexp '(title)'")
    ->count();
    $moresupportitems = round($moresupportitems/2);

    /*$caseitems = LanguageEntry::whereHas(
      'language',
      function($q) {
        $q->where('locale', Config::get('app.locale'));
      }
    )
    ->where('group', 'cases')
    ->count();
    $caseitems = round($caseitems/2);*/

    $factitems = LanguageEntry::whereHas(
      'language',
      function($q) {
        $q->where('locale', Config::get('app.locale'));
      }
    )
    ->where('group', 'facts')
    ->count();

    $hostingitems = LanguageEntry::whereHas(
      'language',
      function($q) {
        $q->where('locale', Config::get('app.locale'));
      }
    )
    ->where('group', 'hostingcheck')
    ->count();

    $qualityitems = LanguageEntry::whereHas(
      'language',
      function($q) {
        $q->where('locale', Config::get('app.locale'));
      }
    )
    ->where('group', 'qualitycheck')
    ->count();
    //dd($qualityitems);

		return View::make('homepage')->with(compact(array('supportitems', 'moresupportitems', 'factitems', 'hostingitems', 'qualityitems')));
	}

	public function backoffice()
	{
		//dd( File::exists('css') and File::isDirectory('css') );
		//dd(public_path() . File::directories('directory'));

    return View::make('backoffice');
	}

  public function partial($partial) 
  {

    if ($partial !== null) {
      return View::make('partials/'.$partial);
    }

  }

  public function thankyou() 
  {
    return Redirect::to('/');
  }

  public function upload() 
  {

    return dd(Input::all());

    $file = Input::file('file');
    $filename = $file->getClientOriginalName();
    $file->move(public_path().'/upload', $filename);
    //dd($file->getClientOriginalName());
    return Response::json(array('name' => $filename));
  }

}