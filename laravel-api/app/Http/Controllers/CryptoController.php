<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CryptoController extends Controller
{
    public function getPrices(Request $reques)
    {
        $symbols = $request->query('symbols', 'BTC,ETH');
        
        $response = Http::withHeaders([
            'X-CMC_PRO_API_KEY' => env('CMC_API_KEY')
        ])->get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest', [
            'symbol' => $symbols
        ]);
        
        return response()->json($response->json());
    }
}
