<?php

// Ensure /tmp directories exist for Vercel's read-only filesystem
if (!is_dir('/tmp/storage/logs')) {
    mkdir('/tmp/storage/logs', 0755, true);
}
if (!is_dir('/tmp/storage/framework/views')) {
    mkdir('/tmp/storage/framework/views', 0755, true);
}
if (!is_dir('/tmp/storage/framework/cache')) {
    mkdir('/tmp/storage/framework/cache', 0755, true);
}
if (!is_dir('/tmp/storage/framework/sessions')) {
    mkdir('/tmp/storage/framework/sessions', 0755, true);
}

if (str_contains($_SERVER['REQUEST_URI'], '/build/') || str_contains($_SERVER['REQUEST_URI'], '/assets/')) {
    return false;
}

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';

// ...rest of your code
```

**2. Storage path needs to point to /tmp**

Add these to your Vercel environment variables:
```
STORAGE_PATH=/tmp/storage