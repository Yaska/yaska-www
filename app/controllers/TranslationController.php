<?php

use \Waavi\Translation\Models\LanguageEntry;

class TranslationController extends \BaseController {

	public function translate() {

		$model = Request::query('model');

		$pieces = explode(".", $model);

		$translations = LanguageEntry::whereHas(
      'language',
      function($q) {
        $q->where('locale', Config::get('app.locale'));
      }
    )->where('group', $pieces[0])->where('item', $pieces[1])->first(); //->select('id')

		return Response::json($translations);

	}
	public function update() {

		$model = Request::query('model');

		$pieces = explode('.', $model);

		$translations = LanguageEntry::whereHas(
      'language',
      function ($q) {
        $q->where('locale', Config::get('app.locale'));
      }
    )->where('group', $pieces[0])->where('item', $pieces[1])->first();

    $translations->text = Input::get('translation');

    $translations->update();

    return Response::json($translations);
	}

	public function getlist() {

		$model = Request::query('model');

		$pieces = explode('.', $model);

    $supportitems = LanguageEntry::whereHas(
      'language',
      function($q) {
        $q->where('locale', Config::get('app.locale'));
      }
    )->where('group', $pieces[0])->get();

    return $supportitems->toArray();
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	/*public function update($id)
	{
		//
	}*/

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}