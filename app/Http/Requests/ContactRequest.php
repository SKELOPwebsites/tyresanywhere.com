<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'phone' => ['required', 'numeric'],
            'email' => ['required', 'email'],
            'comments' => ['required', 'string', 'max:1000']
        ];
    }

    public function messages(): array
    {
        return [
            'first_name.required' => 'Please enter a first name',
            'first_name.string' => 'Please enter a valid first name',
            'last_name.required' => 'Please enter a last name',
            'last_name.string' => 'Please enter a valid last name',
            'phone.required' => 'Please enter a phone number',
            'phone.numeric' => 'Please enter a valid phone number',
            'email.required' => 'Please enter an e-mail address',
            'email.email' => 'Please enter a valid e-mail address',
            'comments.required' => 'Please specify some details',
            'comments.string' => 'Please enter valid details',
            'comments.max:1000' => 'Details must be less than 1000 characters',
        ];
    }
}
