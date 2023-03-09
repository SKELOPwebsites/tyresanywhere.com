<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invoice</title>

    <style>
        html{
            margin-bottom: 16px;
        }
        * {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }

        @font-face {
            font-family: Poppins;
            src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800');
        }

        .font-poppins {
            font-family: Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
        .float-left {
            float: left;
        }
        .float-right {
            float: right;
        }
        .flex {
            display: flex;
        }
        .justify-between {
            justify-content: space-between;
        }
        .items-start {
            align-items: flex-start;
        }
        .w-1\/2 {
            width: 50%;
        }
        .w-1\/4 {
            width: 25%;
        }
        .w-3\/4 {
            width: 75%;
        }
        .text-xs{
            font-size: 12px;
        }
        .text-sm{
            font-size: 0.875rem;
        }
        .text-2xl{
            font-size: 1.5rem;
            line-height: 0.8rem;
        }
        .text-4xl{
            font-size: 2.25rem;
            line-height: 1rem;
        }
        .font-bold{
            font-weight: 700;
        }
        .font-semibold {
            font-weight: 600;
        }
        .underline {
            text-decoration: underline;
        }
        .uppercase{
            text-transform: uppercase;
        }
        .text-left {
            text-align: left;
        }
        .m-0 {
            margin: 0;
        }
        .my-4{
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        .my-8{
            margin-top: 8rem;
            margin-bottom: 8rem;
        }
        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        .py-1 {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
        }
        .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
        .px-2 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
        .pl-2 {
            padding-left: 0.5rem;
        }
        .pt-6 {
            padding-top: 1.5rem;
        }
        .border-2 {
            border-width: 2px;
        }
        .border-gray-300{
            border-color: rgb(209, 213, 219);
        }
        .border-gray-600 {
            border-color: rgb(75, 85, 99);
        }
        .space-y-2 > *{
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .grid {
            display: grid;
        }
        .w-7\/12 {
            width: 58.333333%;
            display: inline-block;
        }
        .w-5\/12 {
            width: 41.666666%;
            display: inline-block;
        }
        .w-2\/12 {
            width: 16.666666%;
            display: inline-block;
        }
        .w-1\/12 {
            width: 8.333333%;
            display: inline-block;
        }
        .bg-red-400 {
            background-color: rgb(248, 113, 113);
        }
        .w-full {
            width: 100%;
        }
        .text-black {
            color: black;
        }
        .text-gray-600 {
            color: rgb(75, 85, 99);
        }
        .flex-col {
            flex-direction: column;
        }
        .bg-orange-200\/30{
            background-color: rgba(254, 215, 170, 0.3);
        }
        .bg-orange-200\/40{
            background-color: rgba(254, 215, 170, 0.40);
        }
        .bg-orange-200\/60{
            background-color: rgba(254, 215, 170, 0.60);
        }
        .bg-orange-200\/75{
            background-color: rgba(254, 215, 170, 0.75);
        }
        .signature {
            border-top: 1px dotted rgb(75, 85, 99);
        }
        .footer {
            width: 100%;
            position: fixed;
            bottom: 0;
            text-align: center;
        }
        .page-break {
            page-break-after: always;
        }
    </style>
</head>
<body class="font-poppins">
    <div style="height: 300px">
        <div class="w-3\/4 float-left">
            <img src="{{ public_path('images/main/tyresanywhere-bg.png') }}">
            <p class="text-sm" style="line-height: 0.5rem">Tyres Anywhere LTD</p>
            <p class="text-sm" style="line-height: 0.5rem">07442 980101</p>
            <p class="text-sm" style="line-height: 0.5rem">info@tyresanywhere.com</p>
            <p class="text-sm" style="line-height: 0.5rem">www.tyresanywhere.com</p>
            <br>
            <p class="text-sm" style="line-height: 0.5rem">19 Plumer Road</p>
            <p class="text-sm" style="line-height: 0.5rem">High Wycombe</p>
            <p class="text-sm" style="line-height: 0.5rem">HP11 2SS</p>
        </div>
        <div class="w-1\/4 text-left float-right">
            <p class="text-4xl font-bold underline uppercase">INVOICE</p>
            <br>
            <p class="text-sm" style="line-height: 0.5rem"><b>Order Date</b>: {{ $order_date }}</p>
            <p class="text-sm" style="line-height: 0.5rem"><b>Invoice</b> #: {{ $order_id }}</p>
            <br>
            <p class="text-sm" style="line-height: 0.5rem"><b>Fitting Address:</b></p>
            <p class="text-sm" style="line-height: 0.5rem">{{ $user->fitting_address_1 }}</p>
            <p class="text-sm" style="line-height: 0.5rem">{{ $user->fitting_town }}</p>
            <p class="text-sm" style="line-height: 0.5rem">{{ $user->fitting_postcode }}</p>
        </div>
    </div>

    <hr class="border-gray-600">

    <div>
        <p class="font-bold text-2xl">Client Details:</p>
        <div class="text-sm" style="line-height: 0.5rem">
            <div>
                <p class="font-bold">Name/Company</p>
                <p>{{ $user->firstname }} {{ $user->lastname }}</p>
            </div>
            <div>
                <p class="font-bold">Vehicle Registration</p>
                <p style="text-transform: uppercase">{{ $user->registration }}</p>
            </div>
            <div>
                <p class="font-bold">Phone Number</p>
                <p>{{ $user->phone }}</p>
            </div>
            <div>
                <p class="font-bold">Email Address</p>
                <p>{{ $user->email }}</p>
            </div>
        </div>
    </div>

    <hr class="my-4 border-gray-600">

    <div class="w-full" style="font-size: 0; margin: 4rem 0 0 0;">
        <div class="w-7\/12">
            <div class="bg-red-400 w-full" style="height: 36px">
                <p class="font-bold text-black text-sm uppercase px-2 m-0" style="line-height: 26px">DESCRIPTION</p>
            </div>
            <div class="bg-orange-200\/30 w-full">
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['brand'] }} {{ $tyre['model'] }} {{ $tyre['width'] }}/{{ $tyre['profile'] }} R{{ $tyre['rim'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">Timeslot {{ $timeslot['slot_from'] }}-{{ $timeslot['slot_to'] }} | {{ $timeslot['day'] }}/{{ $timeslot['month'] }}/{{ $timeslot['year'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">Fitting & Balancing</p>
                <p class="text-black text-sm m-0 pl-2 py-2">Call-out</p>
                <p class="text-black text-sm m-0 pl-2 py-2">Tyre Disposal</p>
            </div>
        </div>
        <div class="w-1\/12">
            <div class="bg-red-400 w-full" style="height: 36px">
                <p class="font-bold text-black text-sm uppercase px-2 m-0" style="line-height: 26px">QTY</p>
            </div>
            <div class="bg-orange-200\/40 w-full">
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">1</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">1</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] }}</p>
            </div>
        </div>
        <div class="w-2\/12">
            <div class="bg-red-400 w-full" style="height: 36px">
                <p class="font-bold text-black text-sm uppercase px-2 m-0" style="line-height: 26px">RATE</p>
            </div>
            <div class="bg-orange-200\/60 w-full">
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] >= 4 ? $tyre['price_offer'] : $tyre['price'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $timeslot['price'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $fitting }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $callout }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $disposal }}</p>
            </div>
        </div>
        <div class="w-2\/12">
            <div class="bg-red-400 w-full" style="height: 36px">
                <p class="font-bold text-black text-sm uppercase px-2 m-0" style="line-height: 26px">AMOUNT</p>
            </div>

            <div class="bg-orange-200\/75 w-full">
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] >= 4 ? $tyre['price_offer'] * $tyre['pivot']['quantity'] : $tyre['price'] * $tyre['pivot']['quantity'] }}</p>
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ $timeslot['price'] }}</p>
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ number_format($fitting * $tyre['pivot']['quantity'], 2) }}</p>
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ $callout }}</p>
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ number_format($disposal * $tyre['pivot']['quantity'], 2) }}</p>
            </div>
        </div>
    </div>

    <div class="w-full" style="font-size: 0;">
        <div class="w-7\/12 text-xs"></div>
        <div class="w-5\/12 text-sm">
            <hr class="border-gray-300">
            <div style="height: 32px" class="w-full">
                <p class="uppercase text-black float-left m-0">TOTAL</p>
                <p class="float-right m-0">£{{ $total }}</p>
            </div>
            <div style="height: 32px" class="w-full">
                <p class="uppercase float-left m-0">PAID 25%</p>
                <p class="float-right m-0">-£{{ $paid }}</p>
            </div>
            <div style="height: 32px" class="w-full">
                <p class="uppercase font-bold float-left m-0">REMAINING BALANCE</p>
                <p class="font-bold float-right m-0">£{{ $remaining }}</p>
            </div>
        </div>
    </div>

    <div class="footer">
        <p class="m-0 text-xs text-gray-600">&copy; 2022, Tyres Anywhere, Mobile Tyre Fitting</p>
    </div>

    <div class="page-break"></div>

    <div style="height: 300px">
        <div class="w-3\/4 float-left">
            <img src="{{ public_path('images/main/tyresanywhere-bg.png') }}">
            <p class="text-sm" style="line-height: 0.5rem">Tyres Anywhere LTD</p>
            <p class="text-sm" style="line-height: 0.5rem">07442 980101</p>
            <p class="text-sm" style="line-height: 0.5rem">info@tyresanywhere.com</p>
            <p class="text-sm" style="line-height: 0.5rem">www.tyresanywhere.com</p>
            <br>
            <p class="text-sm" style="line-height: 0.5rem">19 Plumer Road</p>
            <p class="text-sm" style="line-height: 0.5rem">High Wycombe</p>
            <p class="text-sm" style="line-height: 0.5rem">HP11 2SS</p>
        </div>
        <div class="w-1\/4 text-left float-right">
            <p class="text-4xl font-bold underline uppercase">INVOICE</p>
            <br>
            <p class="text-sm" style="line-height: 0.5rem"><b>Order Date</b>: {{ $order_date }}</p>
            <p class="text-sm" style="line-height: 0.5rem"><b>Invoice</b> #: {{ $order_id }}</p>
            <br>
            <p class="text-sm" style="line-height: 0.5rem"><b>Fitting Address:</b></p>
            <p class="text-sm" style="line-height: 0.5rem">{{ $user->fitting_address_1 }}</p>
            <p class="text-sm" style="line-height: 0.5rem">{{ $user->fitting_town }}</p>
            <p class="text-sm" style="line-height: 0.5rem">{{ $user->fitting_postcode }}</p>
        </div>
    </div>

    <hr class="border-gray-600">

    <div>
        <p class="font-bold text-2xl">Client Details:</p>
        <div class="text-sm" style="line-height: 0.5rem">
            <div>
                <p class="font-bold">Name/Company</p>
                <p>{{ $user->firstname }} {{ $user->lastname }}</p>
            </div>
            <div>
                <p class="font-bold">Vehicle Registration</p>
                <p style="text-transform: uppercase">{{ $user->registration }}</p>
            </div>
            <div>
                <p class="font-bold">Phone Number</p>
                <p>{{ $user->phone }}</p>
            </div>
            <div>
                <p class="font-bold">Email Address</p>
                <p>{{ $user->email }}</p>
            </div>
        </div>
    </div>

    <hr class="my-4 border-gray-600">

    <div class="w-full" style="font-size: 0; margin: 4rem 0 0 0;">
        <div class="w-7\/12">
            <div class="bg-red-400 w-full" style="height: 36px">
                <p class="font-bold text-black text-sm uppercase px-2 m-0" style="line-height: 26px">DESCRIPTION</p>
            </div>
            <div class="bg-orange-200\/30 w-full">
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['brand'] }} {{ $tyre['model'] }} {{ $tyre['width'] }}/{{ $tyre['profile'] }} R{{ $tyre['rim'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">Timeslot {{ $timeslot['slot_from'] }}-{{ $timeslot['slot_to'] }} | {{ $timeslot['day'] }}/{{ $timeslot['month'] }}/{{ $timeslot['year'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">Fitting & Balancing</p>
                <p class="text-black text-sm m-0 pl-2 py-2">Call-out</p>
                <p class="text-black text-sm m-0 pl-2 py-2">Tyre Disposal</p>
            </div>
        </div>
        <div class="w-1\/12">
            <div class="bg-red-400 w-full" style="height: 36px">
                <p class="font-bold text-black text-sm uppercase px-2 m-0" style="line-height: 26px">QTY</p>
            </div>
            <div class="bg-orange-200\/40 w-full">
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">1</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">1</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] }}</p>
            </div>
        </div>
        <div class="w-2\/12">
            <div class="bg-red-400 w-full" style="height: 36px">
                <p class="font-bold text-black text-sm uppercase px-2 m-0" style="line-height: 26px">RATE</p>
            </div>
            <div class="bg-orange-200\/60 w-full">
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] >= 4 ? $tyre['price_offer'] : $tyre['price'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $timeslot['price'] }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $fitting }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $callout }}</p>
                <p class="text-black text-sm m-0 pl-2 py-2">{{ $disposal }}</p>
            </div>
        </div>
        <div class="w-2\/12">
            <div class="bg-red-400 w-full" style="height: 36px">
                <p class="font-bold text-black text-sm uppercase px-2 m-0" style="line-height: 26px">AMOUNT</p>
            </div>

            <div class="bg-orange-200\/75 w-full">
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ $tyre['pivot']['quantity'] >= 4 ? $tyre['price_offer'] * $tyre['pivot']['quantity'] : $tyre['price'] * $tyre['pivot']['quantity'] }}</p>
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ $timeslot['price'] }}</p>
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ number_format($fitting * $tyre['pivot']['quantity'], 2) }}</p>
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ $callout }}</p>
                <p class="text-black text-sm uppercase m-0 pl-2 py-2">{{ number_format($disposal * $tyre['pivot']['quantity'], 2) }}</p>
            </div>
        </div>
    </div>

    <div class="w-full" style="font-size: 0;">
        <div class="w-7\/12 text-xs">
            <div class="signature" style="margin-right: 2rem;"></div>
            <p class="text-gray-600" style="margin-right: 2rem;">Sign to confirm the tyre is fitted and you've paid the remaining balance</p>
        </div>
        <div class="w-5\/12 text-sm">
            <hr class="border-gray-300">
            <div style="height: 32px" class="w-full">
                <p class="uppercase text-black float-left m-0">TOTAL</p>
                <p class="float-right m-0">£{{ $total }}</p>
            </div>
            <div style="height: 32px" class="w-full">
                <p class="uppercase float-left m-0">PAID 25%</p>
                <p class="float-right m-0">-£{{ $paid }}</p>
            </div>
            <div style="height: 32px" class="w-full">
                <p class="uppercase font-bold float-left m-0">REMAINING BALANCE</p>
                <p class="font-bold float-right m-0">£{{ $remaining }}</p>
            </div>
        </div>
    </div>

    <div class="footer">
        <p class="m-0 text-xs text-gray-600">&copy; 2022, Tyres Anywhere, Mobile Tyre Fitting</p>
    </div>
</body>
</html>
