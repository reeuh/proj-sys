<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Capstone;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('students/capstone', [
            'capstone' => Capstone::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Code to show form for creating a new post
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Code to save a new post
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Code to display a specific post
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // Code to show form for editing a post
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Code to update a specific post
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Code to delete a specific post
    }
}