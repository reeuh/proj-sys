<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\StudentCapstoneController;
use App\Http\Controllers\FacultyHomeController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('students/capstone', PostController::class);

Route::get('/students/capstone', [StudentCapstoneController::class, 'index'])->name('students.capstone');
Route::post('/students/capstone/upload', [StudentCapstoneController::class, 'uploadFile'])->name('students.capstone.upload');

Route::middleware('auth:faculty')->group(function () {
    Route::get('/faculty/homepage', [FacultyHomeController::class, 'index'])->name('faculty.homepage');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
