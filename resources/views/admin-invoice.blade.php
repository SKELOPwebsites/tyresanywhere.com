<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invoice</title>

    <style>
        html{
            margin-bottom: 18px;
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
            line-height: 1.25rem;
        }
        .text-2xl{
            font-size: 1.5rem;
            line-height: 0.1rem;
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
        .p-0 {
            padding: 0;
        }
        .px-0 {
            padding-left: 0;
            padding-right: 0;
        }
        .m-0 {
            margin: 0;
        }
        .my-2{
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
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
        .list-none {
            list-style: none;
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
        .h-full {
            height: 100%;
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
            <p class="text-sm" style="line-height: 0.5rem"><b>Order Date</b>: {{ $date }}</p>
            <p class="text-sm" style="line-height: 0.5rem"><b>Invoice</b> #: {{ rand(300, 3000) }}</p>
            <br>
            <p class="text-sm" style="line-height: 0.5rem"><b>Fitting Address:</b></p>
            @if($fitting_address)
                <p class="text-sm" style="line-height: 0.75rem">{{ $fitting_address }}</p>
            @endif
            @if($fitting_town)
                <p class="text-sm" style="line-height: 0.5rem">{{ $fitting_town }}</p>
            @endif
            @if($fitting_postcode)
                <p class="text-sm" style="line-height: 0.5rem">{{ $fitting_postcode }}</p>
            @endif
        </div>
    </div>

    <hr class="border-gray-600">

    <div>
        <p class="font-bold text-2xl">Client Details:</p>
        <div class="text-sm" style="line-height: 0.5rem">
            <div>
                <p class="font-bold">Name/Company</p>
                <p>{{ $name }}</p>
            </div>
            @if($address || $town || $postcode)
                <div>
                    <p class="font-bold">Address</p>
                    <p>{{ $address }}{{ $town ? ', ' . $town : '' }}{{ $postcode ? ', ' . $postcode : '' }}</p>
                </div>
            @endif
            @if($registration)
                <div>
                    <p class="font-bold">Vehicle Registration</p>
                    <p style="text-transform: uppercase">{{ $registration }}</p>
                </div>
            @endif
            @if($phone)
                <div>
                    <p class="font-bold">Phone Number</p>
                    <p>{{ $phone }}</p>
                </div>
            @endif
            <div>
                <p class="font-bold">Email Address</p>
                <p>{{ $email }}</p>
            </div>
        </div>
    </div>

    <hr class="my-2 border-gray-600">

    <p class="font-bold text-black text-sm uppercase m-0" style="line-height: 26px">CALL-OUT TYPE: {{ $callout_type }}</p>

    <div style="margin-top: 0.5rem;">
        <div class="bg-red-400 w-full px-0 m-0 list-none" style="font-size: 0; height: 30px">
            <p class="font-bold text-black text-sm m-0 uppercase w-7\/12" style="line-height: 30px">&nbsp;DESCRIPTION</p>
            <p class="font-bold text-black text-sm m-0 uppercase w-1\/12" style="line-height: 30px">&nbsp;QTY</p>
            <p class="font-bold text-black text-sm m-0 uppercase w-2\/12" style="line-height: 30px;">&nbsp;RATE</p>
            <p class="font-bold text-black text-sm m-0 uppercase w-2\/12" style="line-height: 30px;">&nbsp;AMOUNT</p>
        </div>
        @if($tyres)
            @foreach($tyres as $tyre)
                <div class="bg-orange-200\/30 w-full px-0 m-0 list-none" style="font-size: 0; height: 30px">
                    <p class="text-black text-sm m-0 w-7\/12" style="line-height: 30px">&nbsp;{{ $tyre['name'] }}</p>
                    <p class="text-black text-sm m-0 w-1\/12" style="line-height: 30px">&nbsp;{{ $tyre['qty'] }}</p>
                    <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ number_format(($tyre['total'] / $tyre['qty']), 2) }}</p>
                    <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ number_format($tyre['total'], 2) }}</p>
                </div>
            @endforeach
        @endif
        @if($items)
            @foreach($items as $item)
                <div class="bg-orange-200\/30 w-full px-0 m-0 list-none" style="font-size: 0; height: 30px">
                    <p class="text-black text-sm m-0 w-7\/12" style="line-height: 30px">&nbsp;{{ $item['name'] }}</p>
                    <p class="text-black text-sm m-0 w-1\/12" style="line-height: 30px">&nbsp;{{ $item['qty'] }}</p>
                    <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ number_format(($item['total'] / $item['qty']), 2) }}</p>
                    <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ number_format($item['total'], 2) }}</p>
                </div>
            @endforeach
        @endif
        <div class="bg-orange-200\/30 w-full px-0 m-0 list-none" style="font-size: 0; height: 30px">
            <p class="text-black text-sm m-0 w-7\/12" style="line-height: 30px">&nbsp;Call-out</p>
            <p class="text-black text-sm m-0 w-1\/12" style="line-height: 30px">&nbsp;1</p>
            <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ $callout ? number_format($callout, 2) : 'INC' }}</p>
            <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ $callout ? number_format($callout, 2) : 'INC' }}</p>
        </div>
        @if($tyres)
            <div class="bg-orange-200\/30 w-full px-0 m-0 list-none" style="font-size: 0; height: 30px">
                <p class="text-black text-sm m-0 w-7\/12" style="line-height: 30px">&nbsp;Fitting & Balancing</p>
                <p class="text-black text-sm m-0 w-1\/12" style="line-height: 30px">&nbsp;{{ $tyre_qty }}</p>
                <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ $fitting ? number_format($fitting, 2) : 'INC' }}</p>
                <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ $fitting ? number_format(($fitting * $tyre_qty), 2) : 'INC' }}</p>
            </div>
            <div class="bg-orange-200\/30 w-full px-0 m-0 list-none" style="font-size: 0; height: 30px">
                <p class="text-black text-sm m-0 w-7\/12" style="line-height: 30px">&nbsp;Tyre Disposal</p>
                <p class="text-black text-sm m-0 w-1\/12" style="line-height: 30px">&nbsp;{{ $tyre_qty }}</p>
                <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ $disposal ? number_format($disposal, 2) : 'INC' }}</p>
                <p class="text-black text-sm m-0 w-2\/12" style="line-height: 30px">&nbsp;{{ $disposal ? number_format(($disposal * $tyre_qty), 2) : 'INC' }}</p>
            </div>
        @endif
    </div>

    <div class="w-full">
        <div class="w-5\/12 text-sm float-right" style="float: right">
            <div style="height: 16px; margin-top: 10px" class="w-full">
                <p class="text-xs uppercase text-black float-left m-0">PAYMENT METHOD</p>
                <p class="text-xs float-right m-0">{{ $payment_type }}</p>
            </div>
            <hr class="border-gray-300">
            <div style="height: 32px" class="w-full">
                <p class="uppercase text-black float-left m-0">TOTAL</p>
                <p class="float-right m-0">£{{ number_format($total, 2) }}</p>
            </div>
            <div style="height: 32px" class="w-full">
                <p class="uppercase float-left m-0">PAID</p>
                <p class="float-right m-0">-£{{ number_format(($total - $amount_to_pay), 2) }}</p>
            </div>
            <div style="height: 32px" class="w-full">
                <p class="uppercase float-left m-0">BALANCE DUE</p>
                <p class="float-right m-0">£{{ number_format($amount_to_pay, 2) }}</p>
            </div>
        </div>
    </div>

    <div class="footer">
        <p class="m-0 text-xs text-gray-600">&copy; 2022, Tyres Anywhere, Mobile Tyre Fitting</p>
    </div>
</body>
</html>
