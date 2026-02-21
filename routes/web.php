<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     // If we see this text, the 302 is GONE and the server is working.
//     // If we still see a blank page, the problem is your Vercel/PHP config.
//     return "Server is up. Redirecting to login would happen here."; 
// });

Route::get('/', function () {
    return auth()->check()
        ? redirect()->route('posts.index')
        : redirect()->route('login');
})->name('home');


Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/posts', [PostController::class, 'index'])
        ->name('posts.index');

    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])
        ->name('posts.edit');

    Route::patch('/posts/{post}', [PostController::class, 'update'])
        ->name('posts.update');

    Route::post('/posts/{post}/approve', [PostController::class, 'approve'])
        ->name('posts.approve');

    Route::delete('/posts/{post}', [PostController::class, 'destroy'])
        ->name('posts.destroy');
});


require __DIR__ . '/settings.php';
