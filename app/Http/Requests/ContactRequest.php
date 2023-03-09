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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'phone' => ['required', 'numeric'],
            'email' => ['required', 'email'],
            'postcode' => ['nullable', 'string'],
            'subject' => ['required', 'string'],
            'body' => ['required', 'string', 'max:1000']
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Please enter a name',
            'name.string' => 'Please enter a valid name',
            'phone.required' => 'Please enter a phone number',
            'phone.numeric' => 'Please enter a valid phone number',
            'email.required' => 'Please enter an e-mail address',
            'email.email' => 'Please enter a valid e-mail address',
            'postcode.string' => 'Please enter a valid postcode',
            'subject.required' => 'Please enter a subject',
            'subject.string' => 'Please enter a valid subject',
            'body.required' => 'Please specify some details',
            'body.string' => 'Please enter valid details',
            'body.max:1000' => 'Details must be less than 1000 characters',
        ];
    }
}
