<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request) {
        if (Auth::attempt($request->validated())) {
            $request->session()->regenerate();

            $token = auth()->createToken('API_TOKEN')->plainTextToken;

            return response()->json([
                'message' => 'Login Successful.',
                'token' => $token
            ], 200);
        }

        return response('Login Failed.', 401);
    }
}
