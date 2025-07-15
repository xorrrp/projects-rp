<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/prices', [CryptoController::class, 'getPrices']);

