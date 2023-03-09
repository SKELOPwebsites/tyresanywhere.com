<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InvoiceMail extends Mailable
{
    use Queueable, SerializesModels;

    public $pdf;
    public string $name;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($pdf, $name)
    {
        $this->pdf = $pdf;
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.invoice')
            ->subject('Invoice for ' . $this->name . ' - Wheel Fit')
            ->attachData($this->pdf, 'invoice.pdf');
    }
}
