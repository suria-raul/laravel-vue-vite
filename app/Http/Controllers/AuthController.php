<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->validated())) {
            return response('Login Failed.', Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('api_token', $token, 60 * 24);

        return response(
            'Login Successful.',
            Response::HTTP_OK
        )->withCookie($cookie);
    }

    public function register(RegistrationRequest $request)
    {
        User::create($request->validated());

        return response('Registered Successfully', Response::HTTP_CREATED);
    }
}
