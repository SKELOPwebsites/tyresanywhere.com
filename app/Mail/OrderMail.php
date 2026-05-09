<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderMail extends Mailable
{
    use Queueable, SerializesModels;

    public int $orderId;
    /**
     * Create a new message instance.
     */
    public function __construct($orderId)
    {
        $this->orderId = $orderId;
    }

    public function build()
    {
        return $this->markdown('emails.order')->with('orderId', $this->orderId);
    }
}
