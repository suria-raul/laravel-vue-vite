<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function login(LoginRequest $request) {
        if (Auth::attempt($request->validated())) {
            $request->session()->regenerate();

            $token = auth()->createToken('API_TOKEN')->plainTextToken;

            return response()->json([
                'message' => 'Login Successful.',
                'token' => $token
            ], Response::HTTP_OK);
        }

        return response('Login Failed.', Response::HTTP_UNAUTHORIZED);
    }
}
