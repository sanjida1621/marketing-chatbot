<?php

// 1. Setup writable directories for Vercel
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

// 2. Load Autoloader
require __DIR__ . '/../vendor/autoload.php';

// 3. Catch all errors for debugging
error_reporting(E_ALL);
ini_set('display_errors', '1');

try {
    // 4. Initialize Laravel 12 Application
    $instance = require_once __DIR__ . '/../bootstrap/app.php';

    // Laravel 12 check: convert Builder to Application if necessary
    if ($instance instanceof \Illuminate\Foundation\Configuration\ApplicationBuilder) {
        $app = $instance->create();
    } else {
        $app = $instance;
    }

    // 5. Force Public Path (Fixed for Vercel's structure)
    $app->usePublicPath(__DIR__ . '/../public');
    $app->useStoragePath('/tmp/storage');

    // 6. Handle the Request
    $kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
    $request = Illuminate\Http\Request::capture();
    $response = $kernel->handle($request);

    // 7. Debug 302 Redirects
    // If you're getting a blank page on a 302, this will print the destination
    if ($response->getStatusCode() === 302 && $request->path() === '/') {
        $target = $response->headers->get('Location');
        header("X-Debug-Redirect: $target"); 
        // If blank, uncomment next line to see target in browser:
        // die("Redirecting to: $target");
    }

    $response->send();
    $kernel->terminate($request, $response);

} catch (\Throwable $e) {
    header("HTTP/1.1 500 Internal Server Error");
    echo "<h1>Deployment Debug Error</h1>";
    echo "<b>Message:</b> " . htmlspecialchars($e->getMessage()) . "<br>";
    echo "<b>File:</b> " . $e->getFile() . ":" . $e->getLine() . "<br>";
    echo "<pre>" . $e->getTraceAsString() . "</pre>";
    exit;
}