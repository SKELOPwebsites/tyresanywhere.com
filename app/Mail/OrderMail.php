<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderMail extends Mailable
{
    use Queueable, SerializesModels;

    public int $orderId;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($orderId)
    {
        $this->orderId = $orderId;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.order')->with('orderId', $this->orderId);
    }
}
