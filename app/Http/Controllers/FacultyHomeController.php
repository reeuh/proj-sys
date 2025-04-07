<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FacultyHomeController extends Controller
{
    public function index()
    {
        return inertia('faculty/homepage', [
            'message' => 'Welcome to the Faculty Homepage!',
        ]);
    }
}
