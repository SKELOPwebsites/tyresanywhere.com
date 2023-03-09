@component('mail::message')
    <div class="mx-auto w-screen 2xl\:max-w-7xl xl\:max-w-6xl lg\:max-w-4xl md\:max-w-3xl max-w-xl lg\:px-0 px-2">
        <div class="max-w-4xl mx-auto">
            <div class="bg-white lg\:px-24 md\:px-12 px-4 sm\:py-12 py-6 rounded-lg border border-gray-300">
                <span class="block text-center sm\:text-2xl text-xl font-light">Thank you for your order!</span>
                <span class="block mt-2 text-center text-gray-500 sm\:text-sm text-xs font-light">Your order is confirmed, here is your order summary - this will also be emailed to you.</span>

                <div class="mb-6 mt-12">
                    <div class="flex items-center justify-between pb-3 border-b">
                        <span class="sm\:text-2xl text-xl">Your Fitting Details</span>
                        <span class="text-gray-500 text-sm mt-auto">Price</span>
                    </div>
                    <div class="relative min-h-[175px] grid grid-cols-12 gap-x-4 py-5 border-b">
                        <div class="sm\:col-span-2 col-span-3 flex items-center">
                            <img class="w-full" src="{{ asset('/images/tyres/timeslot.webp') }}" alt="Timeslot.vue">
                        </div>
                        <div class="sm\:col-span-10 col-span-9 flex flex-col">
                            <div class="flex justify-between pb-2">
                                <span class="block text-base text-ellipsis whitespace-nowrap overflow-hidden pr-4">{{ $summary['timeslot']['slot_from'] }}-{{ $summary['timeslot']['slot_to'] }} {{ $summary['timeslot']['day'] }}/{{ $summary['timeslot']['month'] }}/{{ $summary['timeslot']['year'] }}</span>
                                <div class="block">
                                    @if($summary['timeslot']['price'] > 0)
                                        <span class="text-black font-semibold md\:text-lg text-base mt-auto">£{{ $summary['timeslot']['price'] }}</span>
                                    @else
                                        <span class="text-black font-semibold md\:text-lg text-base mt-auto">FREE</span>
                                    @endif
                                </div>
                            </div>
                            <div class="flex flex-col space-y-1">
                                <span class="text-xs"><b>Timeslot:</b> {{ $summary['timeslot']['slot_from'] }}-{{ $summary['timeslot']['slot_to'] }}</span>
                                <span class="text-xs"><b>Date:</b> {{ $summary['timeslot']['day'] }}/{{ $summary['timeslot']['month'] }}/{{ $summary['timeslot']['year'] }}</span>
                                <span class="text-xs"><b>Fitting Location:</b> {{ $summary['user']['fitting_address_1'] }}, {{ $summary['user']['fitting_town'] }}, {{ $summary['user']['fitting_postcode'] }}</span>
                                <span class="text-xs"><b>Vehicle Reg #:</b> {{ $summary['user']['registration'] }}</span>
                                <span class="text-\[10px\] text-gray-400">If any of these detail(s) are missing or incorrect, please let us know ASAP</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between pb-3 border-b">
                        <span class="sm\:text-2xl text-xl">Your Cart</span>
                        <span class="sm\:block hidden text-gray-500 text-sm mt-auto">Price</span>
                    </div>

                    @foreach($summary['cart'] as $tyre)
                        <div class="relative min-h-\[175px\] grid grid-cols-12 gap-x-4 py-5 border-b">
                            <div class="sm\:col-span-2 col-span-3 flex items-center">
                                <img class="w-full" src="{{ asset('/images/tyres/tyre_logo/' . $tyre['brand'] . '.webp') }}" onerror="this.onerror=null; this.src=`{{ asset('/images/tyres/tyre/sample.webp') }}`" alt="{{ $tyre['brand'] }}">
                            </div>
                            <div class="sm\:col-span-10 col-span-9 flex flex-col">
                                <div class="flex justify-between pb-2">
                                    <span class="text-lg text-ellipsis whitespace-nowrap overflow-hidden pr-4">{{ $tyre['brand'] }} {{ $tyre['model'] }} {{ $tyre['width'] }}/{{ $tyre['profile'] }} R{{ $tyre['rim'] }} {{ $tyre['speed'] }}</span>
                                    <div>
                                        @if($tyre['pivot']['quantity'] < 4)
                                            <span class="text-black font-semibold md\:text-lg text-base mt-auto">£{{ $tyre['price'] }}</span>
                                        @else
                                            <span class="text-black mt-auto">
<del class="text-xs decoration-red-500 mr-2">£{{ $tyre['price'] }}</del>
<span class="md\:text-lg text-base font-semibold">£{{ $tyre['price_offer'] }}</span>
</span>
                                        @endif
                                    </div>
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <span class="text-xs"><b>Size:</b> {{ $tyre['width'] }}/{{ $tyre['profile'] }} R{{ $tyre['rim'] }}</span>
                                    <span class="text-xs"><b>Speed:</b> {{ $tyre['speed'] }}</span>
                                    <span class="text-xs"><b>Quantity:</b> {{ $tyre['pivot']['quantity'] }}</span>
                                </div>
                            </div>
                        </div>
                    @endforeach

                    <div class="md\:w-1\/2 w-full mx-auto">
                        <div class="pt-8 pb-4 mx-4 space-y-4 border-b">
                            <div class="flex items-start justify-between">
                                <div>
                                    <span class="block text-sm">Subtotal</span>
                                    <span class="block text-\[10px\]">({{ $summary['summary']['items'] }} items)</span>
                                </div>
                                <span
                                    class="block text-sm text-gray-600 font-semibold">£{{ $summary['summary']['subtotal'] }}</span>
                            </div>
                            <div class="flex items-start justify-between">
                                <div>
                                    <span class="block text-sm">Fitting & Balancing</span>
                                    <span class="block text-\[10px\]">£{{ $summary['summary']['fitting_cost'] }} per tyre</span>
                                </div>
                                <span
                                    class="block text-sm text-gray-600 font-semibold">£{{ $summary['summary']['fitting'] }}</span>
                            </div>
                            <div class="flex items-start justify-between">
                                <div>
                                    <span class="block text-sm">Call-out</span>
                                    <span class="block text-\[10px\]">We Come To You</span>
                                </div>
                                <span
                                    class="block text-sm text-gray-600 font-semibold">£{{ $summary['summary']['callout'] }}</span>
                            </div>
                            <div class="flex items-start justify-between">
                                <div>
                                    <span class="block text-sm">Tyre Disposal</span>
                                    <span class="block text-\[10px\]">£{{ $summary['summary']['disposal_cost'] }} per tyre</span>
                                </div>
                                <span
                                    class="block text-sm text-gray-600 font-semibold">£{{ $summary['summary']['disposal'] }}</span>
                            </div>
                        </div>
                        <div class="pt-8 pb-4 px-4 space-y-4 border-b">
                            <div class="flex items-center justify-between">
                                <span class="block text-sm">Total</span>
                                <span
                                    class="block text-sm text-gray-600 font-semibold">£{{ $summary['summary']['total'] }}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="block text-sm">Paid 25%</span>
                                <span
                                    class="block text-sm text-gray-600 font-semibold">-£{{ $summary['summary']['total_today'] }}</span>
                            </div>
                            <div class="flex items-start justify-between">
                                <div>
                                    <span class="block text-sm text-red-500">Remaining Balance</span>
                                    <span class="block text-\[10px\]">Pay when the tyre is fitted</span>
                                </div>
                                <span
                                    class="block text-sm text-gray-600 font-semibold">£{{ $summary['summary']['total_later'] }}</span>
                            </div>
                        </div>
                        <span
                            class="block text-\[11px\] text-center text-gray-500">TXN: {{ $summary['summary']['txn_id'] }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endcomponent
