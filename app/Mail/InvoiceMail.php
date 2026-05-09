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
    public string $fromEmail;
    public string $fromName;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($pdf, $name, $fromEmail, $fromName)
    {
        $this->pdf = $pdf;
        $this->name = $name;
        $this->fromEmail = $fromEmail;
        $this->fromName = $fromName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->fromEmail, $this->fromName)
            ->markdown('emails.invoice')
            ->subject('Invoice for ' . $this->name . ' - ' . $this->fromName)
            ->attachData($this->pdf, 'invoice.pdf');
    }
}
