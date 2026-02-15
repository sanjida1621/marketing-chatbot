<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/posts', [PostController::class, 'index']);
    Route::post('/posts/{post}/approve', [PostController::class, 'approve']);
    Route::delete('/posts/{post}', [PostController::class, 'destroy']);

});
