<?php

// Create required /tmp directories for Vercel's read-only filesystem
$dirs = [
    '/tmp/storage/logs',
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/framework/sessions',
    '/tmp/bootstrap/cache',
];
foreach ($dirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

// Skip PHP handling for built assets
if (str_contains($_SERVER['REQUEST_URI'], '/build/')) {
    return false;
}

// Catch ALL errors and display them
error_reporting(E_ALL);
ini_set('display_errors', '1');

try {
    require __DIR__ . '/../vendor/autoload.php';

    // Explicitly set the base path for Laravel 12
    $app = require_once __DIR__ . '/../bootstrap/app.php';

    $app->useStoragePath('/tmp/storage');
    $app->usePublicPath(__DIR__ . '/../public');
    $kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
    $response = $kernel->handle(
        $request = Illuminate\Http\Request::capture()
    );
    $response->send();
    $kernel->terminate($request, $response);
} catch (\Throwable $e) {
    http_response_code(500);
    echo '<pre>';
    echo 'Error: ' . $e->getMessage() . "\n";
    echo 'File: ' . $e->getFile() . ':' . $e->getLine() . "\n";
    echo 'Trace: ' . $e->getTraceAsString();
    echo '</pre>';
}