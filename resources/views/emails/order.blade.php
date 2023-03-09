@component('mail::message')
<span class="block text-center sm\:text-2xl text-xl font-light">Thank you for your order!</span>
<span class="block mt-2 text-center text-gray-500 sm\:text-sm text-xs font-light">Your order is confirmed, click the button below to view your order summary.</span>
<span class="block text-center text-gray-500 sm\:text-sm text-xs font-light">This link will expire in 14 days.</span>

@component('mail::button', ['url' => \Illuminate\Support\Facades\URL::temporarySignedRoute('order-summary', now()->addDays(14), $orderId), 'color' => 'green'])
    View Order
@endcomponent

<span class="block mt-2 text-center text-gray-500 sm\:text-sm text-xs font-light">Link not working? Copy and paste this into your browser:</span>
<span class="block text-center text-gray-500 sm\:text-sm text-xs font-light">{{\Illuminate\Support\Facades\URL::temporarySignedRoute('order-summary', now()->addDays(14), $orderId)}}</span>

@endcomponent
