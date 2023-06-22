<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="alternate icon" type="image/png" href="/favicon.png">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">

    <!-- app -->
    @vite('resources/js/app.js')
    <!-- Scripts -->
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
