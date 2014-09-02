<?php

class SessionsController extends \BaseController {

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('users.login');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//dd(Input::all());
		$input = Input::only('username', 'password');
		/*if (Auth::validate($input))
		{
		    dd(true);
		}*/

		//dd(Auth::attempt($input));

		if (Auth::attempt($input, Input::get('remember_me'))) {
			//return Redirect::route('homepage');
			return Redirect::intended('/');
		}

		return Redirect::back()->withInput()->withFlashMessage('invalid');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id = null)
	{
		//dd('test');

		Auth::Logout();

		return Redirect::route('homepage');
	}

}