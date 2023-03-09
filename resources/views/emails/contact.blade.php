@component('mail::message')
<h1>{{ $details['subject'] }}</h1>

Name: {{ $details['name'] }}<br>
E-mail Address: {{ $details['email'] }}<br>
Mobile Number: {{ $details['phone'] }}<br>
Postcode: {{ $details['postcode'] }}<br><br>

Message: <br>
{{ $details['body'] }}
@endcomponent
