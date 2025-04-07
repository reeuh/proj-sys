<?php

namespace Database\Seeders;

use App\Models\Faculty;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Faculty::create([
            'name' => 'John Doe',
            'email' => 'johndoe@zppsu.edu.ph',
            'password' => Hash::make('password123'), // Hashed password
        ]);

        Faculty::create([
            'name' => 'Jane Smith',
            'email' => 'janesmith@zppsu.edu.ph',
            'password' => Hash::make('password123'), // Hashed password
        ]);
    }
}
