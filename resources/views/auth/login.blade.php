@extends('auth.auth_common')


@section('title', 'Login Page')
@section('auth_page_title', 'Login')
@section('auth_anothor_page', 'Sign up')
@section('auth_anothor_link', 'register')
@section('auth_login_title', 'Login')

@section('contents')
    <form method="POST" action="{{ route('login') }}">
    @csrf
    <input type="hidden" name="login_post_data" value="">
        <p>user_name</p>

            <input id="name" type="text" name="name" value="{{ old('name') }}" autofocus>
            @if ($errors->has('name'))
            <p class="red">{{ $errors->first('name') }}</p>
            @endif
        <p>or
        <br>mail_adress</p>
            <input id="email" type="email" name="email" value="{{ old('email') }}" autofocus>
            @if ($errors->has('email'))
            <p class="red">{{ $errors->first('email') }}</p>
            @endif
        <p>password</p>
            <input id="password" type="password" name="password" required>
            @if ($errors->has('password'))
            <p class="red">{{ $errors->first('password') }}</p>
            @endif
        <input id="login_submit" type="submit" name="login_submit" class="green_button" value="Login">
        <a href="{{ route('password.request') }}" class="btn btn-link"><p class="green_p">パスワードを忘れた時は</p></a>
    </form>
@endsection
