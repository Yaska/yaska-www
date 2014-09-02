<?php

// Composer: "fzaninotto/faker": "v1.3.0"
//use Faker\Factory as Faker;

class UserTableSeeder extends Seeder {

	public function run()
	{
		//DB::table('users')->truncate();

		User::create(array(
			'username'  => 'pierre',
			'email'     => 'pierre@yaska.eu',
			'password'  => 'test',
		));
	}

}