<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('testing', function () {
    $start = new DateTime("2020-01-01");
    $end = new DateTime("2020-02-02");
    $interval = new DateInterval("P1D");
    $range = new DatePeriod($start, $interval, $end);
    $dates = [];
    foreach ($range as $d) { $dates[] = $d->format("Y-m-d"); }
    dd($dates);
});


Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
