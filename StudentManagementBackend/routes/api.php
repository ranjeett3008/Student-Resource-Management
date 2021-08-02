<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Resources routes
Route::get('/get-resources', 'App\Http\Controllers\ResourcesController@getResources');
Route::put('/update-resource/{id}', 'App\Http\Controllers\ResourcesController@updateRessource');
Route::delete('/delete-resource/{id}', 'App\Http\Controllers\ResourcesController@deleteResource');
Route::post('/create-resource', 'App\Http\Controllers\ResourcesController@createResource');
Route::get('/edit-resource/{id}', 'App\Http\Controllers\ResourcesController@editResource');
Route::get('/resources-list', 'App\Http\Controllers\ResourcesController@getResourcesList');


// Students routes
Route::post('/create-student', 'App\Http\Controllers\StudentsController@createStudent');
Route::get('/get-students', 'App\Http\Controllers\StudentsController@getStudents');
Route::put('/update-student/{id}', 'App\Http\Controllers\StudentsController@updateStudent');
Route::delete('/delete-student/{id}', 'App\Http\Controllers\StudentsController@deleteStudent');
Route::get('/edit-student/{id}', 'App\Http\Controllers\StudentsController@editStudent');
