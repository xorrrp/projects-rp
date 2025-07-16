<?php

use App\Http\Controllers\CryptoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/prices', [CryptoController::class, 'getPrices']);

Route::get('/users', function () {
    return response()->json([
        ['id' => 1, 'name' => 'Tupac'],
        ['id' => 2, 'name' => 'Biggie'],
        ['id' => 3, 'name' => 'Snoop Dogg'],
        ['id' => 4, 'name' => 'Eminem'],
        ['id' => 5, 'name' => 'JuiceTheKidd'],
    ]);
});

Route::get('/crypto', function () {
    return response()->json([
    
    ]);
});
