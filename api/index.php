<?php

// 1. Forward Vercel requests to the public directory
// This ensures that assets in /public are reachable
if (str_contains($_SERVER['REQUEST_URI'], '/build/') || str_contains($_SERVER['REQUEST_URI'], '/assets/')) {
    return false;
}

// 2. Standard Laravel 12 Bootstrap
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';

// 3. Handle the request
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);