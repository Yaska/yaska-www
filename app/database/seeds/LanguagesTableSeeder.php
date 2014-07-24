<?php

class LanguagesTableSeeder extends Seeder {

	public function run()
	{
		//DB::table('languages')->truncate();

		Language::create(array(
			'locale' => 'en',
			'name' => 'English',
		));
		Language::create(array(
			'locale' => 'fr',
			'name' => 'French',
		));
		Language::create(array(
			'locale' => 'nl',
			'name' => 'Dutch',
		));
		Language::create(array(
			'locale' => 'pl',
			'name' => 'Polish',
		));
	}

}