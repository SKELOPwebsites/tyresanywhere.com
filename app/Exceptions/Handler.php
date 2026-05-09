<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {

        });
    }

    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);
//        dd($request);
        if (! app()->environment(['local', 'testing']) && in_array($response->status(), [401, 402, 403, 404, 419, 429, 500, 503])) {
            $message = '';
            $body = '';

            switch ($response->status()){
                case 401:
                    $message = 'Unauthorised Access';
                    $body = 'Sorry, but you don\'t have the necessary permissions to view this page.';
                    break;
                case 402:
                    $message = 'Payment Required';
                    $body = 'This content requires payment or subscription. Please make the necessary payments to access it.';
                    break;
                case 403:
                    $message = 'Forbidden';
                    $body = 'Access to this resource is forbidden. If you believe this is an error, please contact the administrator.';
                    break;
                case 404:
                    $message = 'Page Not Found';
                    $body = 'Sorry, the page you are looking for could not be found.';
                    break;
                case 419:
                    $message = 'Page Expired';
                    $body = 'Oops! It seems the page you were on has expired. Please refresh and try again.';
                    break;
                case 429:
                    $message = 'Too Many Requests';
                    $body = 'Slow down! You\'ve exceeded the allowed number of requests. Please try again later.';
                    break;
                case 500:
                    $message = 'Internal Server Error';
                    $body = 'Something went wrong on our end. Our team has been notified, and we\'re working to fix the issue.';
                    break;
                case 503:
                    $message = 'Service Unavailable';
                    $body = 'Sorry, the service is temporarily unavailable. We\'re working to restore it as soon as possible.';
                    break;
            }

            return Inertia::render('Errors/Error', ['status' => $response->status(), 'title' => $message, 'body' => $body])
                ->toResponse($request)
                ->setStatusCode($response->status());
        } elseif ($response->status() === 419) {
            return back()->with([
                'message' => 'The page expired, please try again.',
            ]);
        }

        return $response;
    }
}
